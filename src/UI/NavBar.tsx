import React from 'react'
import logo from '../assets/ALORIX.svg'

const NavBar = () => {
  return (
    <header className="navbar">
        <div className="navbar__logo">
            {/* <img src={logo} alt="Logo"/> */}
            <h1>ALORIX</h1>
        </div>
        <div className="navbar__routes">
            <div>
              <a href="#">MobileApp</a>
           </div>
           <div>
              <a href="#">Dop uslugi</a>
           </div>
           <div>
              <a href="#">Portfolio</a>
           </div>
           <div>
              <a href="#">About Us</a>
           </div>
        </div>
    </header>
  )
}

export default NavBar