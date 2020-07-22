import React from "react";
// Footer component written as a function to be used 
// within the application where creator sees fit.

function Footer() {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

export default Footer;
