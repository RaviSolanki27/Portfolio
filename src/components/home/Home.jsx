import React from "react";
import Body from "../body/Body";
import Things from "../things/Things";
import "./home.css"

function Home() {
  return (
    <div className="home">
      <Body />
      <Things/>
    </div>
  );
}

export default Home;
