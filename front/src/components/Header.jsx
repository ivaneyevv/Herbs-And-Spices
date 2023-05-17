import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
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
                <Link to={"login"}>
                    <button className="auth__button-login">Log in</button>
                </Link>
                <Link to={"signup"}>
                    <button className="auth__button-signup">Sign up</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Header