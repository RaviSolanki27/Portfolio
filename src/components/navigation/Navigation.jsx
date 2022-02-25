import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "../about/About";
import Home from "../home/Home";
import Work from "../work/Work";
import "./nav.css";

function Navigation() {
  return (
    <div >
      <div className="nav-div">
        <div className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/work">WORK</Link>
          <Link to="/about">ABOUT</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Navigation;
