import React from 'react'
import { COLLECTION } from "../../static"
import logo from "../../assets/logo (3).svg"
import "./Header.css"

const Header = () => {
    const navbarItems = COLLECTION?.map((link, index)=> (
        <li>
            <a href="#">
                <span>{link}</span>
            </a>
        </li>
    ))
  return (
    <header  className='header'>
        <div className='container'>
            <nav className='navbar'>
                <div className="navbar__logo">
                    <img src={logo} alt=""/>
                </div>
                <ul className='navbar__collection'>
                    {navbarItems}
                </ul>
                <button className="btn">Booking Now</button>
            </nav>
        </div>
    </header>
  )
}

export default Header