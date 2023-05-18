import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../scss/newproduct.scss'

const NewProduct = () => {
  const [data,setData] = useState({
    title : "",
    category : "",
    image : "",
    cost : "",
    description : ""
  })

  const handleOnChange = (e)=>{
    const {title, value} = e.target

    setData((preve)=>{
        return{
          ...preve,
          [title] : value
        }
    })
  }

  async function ImagetoBase64(file){
    const reader = new FileReader()
    reader.readAsDataURL(file)

    const data = new Promise((resolve,reject)=>{
        reader.onload = () => resolve(reader.result)
        reader.onerror = err => reject(err)
    })

    return data
}

  const uploadImage = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)

    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
}

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const {title, image, category, cost, description } = data

    if(title && image && category && cost && description){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  
      const fetchRes = await fetchData.json()
  
      console.log(fetchRes)
      alert(fetchRes.message)

      setData(()=>{
        return{
          title : "",
          category : "",
          image : "",
          price : "",
          description : ""
        }
      })
    }
    else{
      alert("Enter required Fields")
    }
  }

  return (
    <div className="product__create">
       <form className='create__form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={"text"}  name="name" className='' onChange={handleOnChange} value={data.title}/>
        
        <label htmlFor='category'>Category</label>
        <select className='' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"}>select category</option>
          <option value={"salad"}>For Salad</option>
          <option value={"meat"}>For Meat</option>
          <option value={"desert"}>For Deserts</option>
          <option value={"drink"}>For Drinks</option>
        </select>

        <label htmlFor='image'>Image
        <div  className=''> 
          <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="" />
        </div>
        </label>
        

        <label htmlFor='price' className=''>Price</label>
        <input type={"text"} className='' name='price' onChange={handleOnChange} value={data.price}/>

        <label htmlFor='description'>Description</label>
        <textarea rows={2} value={data.description} className='' name='description' onChange={handleOnChange}></textarea>

        <button className='save-button'>Save</button>
       </form>
    </div>
  )
}

export default NewProduct