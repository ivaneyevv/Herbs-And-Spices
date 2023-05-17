import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className='page-title'>
        Log up
      </div>
        <form className='login__form' action="">
          <label htmlFor="email" className='form-label'>Email</label>
          <input type={"email"} id="email" name="email" className='form-input'/>
          <label htmlFor="password" className='form-label'>Password</label>
          <input type={"password"} id="password" name="password" className='form-input'/>
        </form>

        <button className='form__submit'>
          Log in
        </button>
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