import React from "react";
import headerImage from "./../../assets/images/headerImage.png"
const Header = () => {
  return (
    <div className="scholofind__header" id="home">
      <div className="scholofind__header-content">
        <h1>
          Bridging The Gap Between <span>Ambition</span> And{" "}
          <span>Knowledge</span>
        </h1>
        <p>An effort to help each every student all over the world.</p>
        <div className="scholofind__header-content__button">
          <button type="button" className="header-content__button-register">
            Register Now
          </button>
          <button type="button" className="header-content__button-know">
            Know more
          </button>
        </div>
      </div>
      <div className="scholofind__header-image">
        <img src={headerImage} alt="headerImage"/>
      </div>
    </div>
  );
};

export default Header;