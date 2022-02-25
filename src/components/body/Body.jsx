import React from "react";
import "./body.css";
import insta from "../asset/insta.svg";
import linkedin from "../asset/linkedin.svg";

function Body() {
  return (
    <div className="body">
      <h5>Hi there...</h5>
      <div className="title">
        meet &nbsp; <div className="name"> Raviraj Solanki</div>
      </div>
      <p>
        He is a <span className="fullstack"> Full stack</span> developer
      </p>
      <p>
        He builds Websites using
        <span className="mongo"> MongoDB </span>,<span> ExpressJS </span> ,
        <span> ReactJS </span> ,<span> NodeJS </span>
      </p>

      <div className="social">
        <div>
        <a href="http://www.instagram.com" target={"_blank"} rel="noreferrer">
        <img src={insta} alt="Instagram" /></a></div>
        <div>
        <a href="http://www.linkedin.com" target={"_blank"} rel="noreferrer">
        <img className="linkedin" src={linkedin} alt="LinkedIn" /></a></div>
      </div>
    </div>
  );
}

export default Body;
