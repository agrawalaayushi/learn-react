import React from "react";
import ReactDOM from "react-dom";

// React.createElement => Object => when we render this object onto DOM => becomes HTMLElemet(render)

// created a react object
const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "My app from scratch"
);

/* ReactDOM takes this object and converts it to HTML and push it to browser. 
By pushing means, it will replace completely instead of appending*/
const root = ReactDOM.createRoot(document.getElementById("root"));

// create html element
root.render(heading);
