import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About us</a>
    </p>
    <p>
      <a href="#programs">Programs</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="scholofind__navbar">
      <div className="scholofind__navbar-links">
        <div className="scholofind__navbar-links__logo">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="scholofind__navbar-links__container">
          <Menu />
        </div>
      </div>
      <div className="scholofind__navbar-sign">
        <button className="navbar__sign-in__button" type="button">
          Sign in
        </button>
        <button className="navbar__sign-up__button" type="button">
          Sign up
        </button>
      </div>
      <div className="scholofind__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="scholofind__navbar-menu_container scale-up-centre">
            <div className="scholofind__navbar-menu_container_links">
              <Menu />
              <div className="scholofind__navbar-menu_container_links-sign">
                <button
                  className="navbar-menu_container_links-sign_sign_in"
                  type="button"
                >
                  Sign in
                </button>
                <button
                  className="navbar-menu_container_links-sign_sign_up"
                  type="button"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
