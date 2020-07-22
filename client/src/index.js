import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// This index is meant to hold the info that lets the ReactDOM 
// call the App in order for the application to be rendered
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
