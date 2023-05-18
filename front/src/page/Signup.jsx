import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    nickName: "",
    email: "",
    password: ""
  })
  console.log(data)
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      }
    })
  }
  //console.log(process.env.REACT_APP_SERVER_DOMIN)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nickName, email, password } = data;
    if (nickName && email && password){

      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
        method: "POST",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(data)
      })

      const dataRes = await fetchData.json()
      console.log(dataRes)
      alert(dataRes.message);
      if (dataRes.alert) {
        navigate("/login")
      }

    }
    else{
      alert("fill required fields")
    }
  }

  return (
    <div className='signup'>
      <div className='page-title'>
        Sign up
      </div>
        <form className='signup__form' action="" onSubmit={handleSubmit}>
          <label htmlFor="nickName" className='form-label'>Nickname</label>
          <input type={"text"} id="nickName" name="nickName" className='form-input' value={data.nickName} onChange={handleOnChange}/>
          <label htmlFor="email" className='form-label'>Email</label>
          <input type={"email"} id="email" name="email" className='form-input' value={data.email} onChange={handleOnChange}/>
          <label htmlFor="password" className='form-label'>Password</label>
          <input type={"password"} id="password" name="password" className='form-input' value={data.password} onChange={handleOnChange}/>
          <button className='form__submit'>
            Create
          </button>
        </form>

        <div className='tip-login'>
          <p className='tip__text-login'>Have an account?
            <Link to={"/login"} className='tip-login-link'>
              Login
            </Link>
          </p>
        </div>
    </div>
  )
}

export default Signup