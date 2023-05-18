import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice.js";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const userData = useSelector(state => state)
  const dispatch = useDispatch()

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

  const handleSubmit = async(e) => {
    e.preventDefault()
    const {email,password} = data
    if(email && password ){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })

      const dataRes = await fetchData.json()
      
      console.log(dataRes)

      if(dataRes.alert){
        dispatch(loginRedux(dataRes))
        setTimeout(() => {
          navigate("/")
        }, 1000);
      }

      console.log(userData)

    }
    else{
        alert("Please Enter required fields")
    }
  }

  return (
    <div className='login'>
      <div className='page-title'>
        Log in
      </div>
        <form className='login__form' action='' onSubmit={handleSubmit}>
          <label htmlFor="email" className='form-label'>Email</label>
          <input type={"email"} id="email" name="email" className='form-input' onChange={handleOnChange}/>
          <label htmlFor="password" className='form-label'>Password</label>
          <input type={"password"} id="password" name="password" className='form-input' onChange={handleOnChange}/>
          <button className='form__submit'>
            Log in
          </button>
        </form>

        <div className='tip-signup'>
          <p className='tip__text-signup'>Don't have an account?
            <Link to={"/signup"} className='tip-signup-link'>
              Create
            </Link>
          </p>
        </div>
    </div>
  )
}

export default Login