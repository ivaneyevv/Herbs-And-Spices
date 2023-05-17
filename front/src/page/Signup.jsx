import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup'>
      <div className='page-title'>
        Sign up
      </div>
        <form className='signup__form' action="">
          <label htmlFor="nickName" className='form-label'>Nickname</label>
          <input type={"text"} id="nickname" name="nickname" className='form-input'/>
          <label htmlFor="email" className='form-label'>Email</label>
          <input type={"email"} id="email" name="email" className='form-input'/>
          <label htmlFor="password" className='form-label'>Password</label>
          <input type={"password"} id="password" name="password" className='form-input'/>
        </form>

        <button className='form__submit'>
          Create
        </button>
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