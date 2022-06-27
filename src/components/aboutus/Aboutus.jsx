import React from "react";
import about01 from "./../../assets/images/about01.svg";
import about02 from "./../../assets/images/about02.svg";

const Aboutus = () => {
  return (
    <div className="scholofind__about">
      <div className="scholofind__about-heading">
        <h1>
          About Us<span>About Us</span>
        </h1>
      </div>
      <div className="scholofind__about-content">
        <div className="scholofind__about-content1">
          <p>
            In today&#x27;s world, education has become one of the most
            essential and expensive assets. Most high school pass outs look for
            financial assistance to pursue the career of their dreams that
            requires several years of education. In such a scenario,
            scholarships come up as the most desired form of financial aid. This
            is because, unlike educational loans, you don&#x27;t have to repay
            scholarships. If you are deserving, you can get scholarships on
            merit basis. This makes scholarships prestigious and also pays for
            your degree.
          </p>
          <img src={about01} alt="about01" />
        </div>
        <div className="scholofind__about-content2">
          <p>
            Today due to lack of awareness students are unable to grab those
            opportunities. Some students who really need scholarships are unable
            to get it due to no or less knowledge about the schemes. Scholofind
            has been developed to fill the gap of awareness among students. It
            will help students to find scholarships of their choices and merit.
          </p>
          <img src={about02} alt="about02" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
