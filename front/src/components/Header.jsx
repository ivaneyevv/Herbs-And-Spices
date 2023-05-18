import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logoutRedux } from '../redux/userSlice.js'

const Header = () => {
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logoutRedux());
        alert("Logout successfully");
    }


    const userData = useSelector((state) => state.user)
    console.log(userData)

    return (
        <div className='header'>
            <Link to={""}>
                <div className='header__logo'>
                    <img src={logo} alt="logo" className='logo-image'/>
                </div>
            </Link>
            
            <nav className="header__nav">
                <ul className="nav__list">
                    <Link to={""}>home</Link>
                    <Link to={"about"}>about</Link>
                    <Link to={"contact"}>contact</Link>
                </ul>
            </nav>
            <div className="header__auth">
                {
                    userData.nickName ? <button className="auth__button-signup auth__button-logout" onClick={handleLogOut}>Log out</button> : <Link to={"login"}><button className="auth__button-login">Log in</button></Link>
                }
                {
                    userData.email === process.env.REACT_APP_ADMIN_EMAIL ? <Link to={"newProduct"}><button className="auth__button-login">New Product</button></Link> : <Link to={"signup"}><button className="auth__button-signup">Sign up</button></Link>
                }
            </div>
            
        </div>
    )
}

export default Header