import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/tm-logo.png';
import animation from '../../assets/tm-animated.gif';
import './navbar.css';


const Menu = () => (
  <>
  <p><a href="/">problems</a></p>
  <p><a href="/about">about</a></p>
  <p><a href="#search">search</a></p>
  </>
)

const Navbar = () => {
  const[toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="theory__navbar">
      {/* logo and links */}
      <div className="theory__navbar-links">
        <div className="theory__navbar-links-logo">
          <a href="/"><img src={logo} className="theory__navbar-links-logo-static" alt="logo" /></a>
          <a href="/"><img src={animation} className="theory__navbar-links-logo-active" alt="logo" /></a>
          <a href="/"><h1>Theory<br/>Vis</h1></a>
        </div>
        <div className="theory__navbar-links-container">
         <Menu />
        </div>
      </div>

      {/* nav menu */}
      <div className="theory__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={24} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={24} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="theory__navbar-menu-container scale-up-center">
            <div className="theory__navbar-menu-container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar