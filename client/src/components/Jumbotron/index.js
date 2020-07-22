import React from "react";
import "./style.css";

// This file is meant for the Jumbotron component material

function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
