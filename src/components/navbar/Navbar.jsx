import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "assets/tm-logo.png";
import animation from "assets/tm-animated.gif";
import "./styles.css";

const Menu = () => (
  <>
    <p>
      <Link to="/">problems</Link>
    </p>
    <p>
      <Link to="/about">about</Link>
    </p>
    <p
      style={{
        opacity: "50%",
      }}
    >
      <Link to="#search">search</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="theory__navbar">
      {/* logo and links */}
      <div className="theory__navbar-links">
        <div className="theory__navbar-links-logo">
          <Link to="/">
            <img
              src={logo}
              className="theory__navbar-links-logo-static"
              alt="logo"
            />
          </Link>
          <Link to="/">
            <img
              src={animation}
              className="theory__navbar-links-logo-active"
              alt="logo"
            />
          </Link>
          <Link to="/">
            <h1>
              Theory
              <br />
              Vis
            </h1>
          </Link>
        </div>
        <div className="theory__navbar-links-container">
          <Menu />
        </div>
      </div>

      {/* nav menu */}
      <div className="theory__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={24}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={24}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="theory__navbar-menu-container scale-up-center">
            <div className="theory__navbar-menu-container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
