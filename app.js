import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  {
    id: "parent",
    className: "heading",
  },
  [
    React.createElement(
      "div",
      {
        id: "child",
        className: "heading",
      },
      [
        React.createElement("h1", {}, "I'm child1 h1 tag"),
        React.createElement("h2", {}, "I'm child1 h2 tag"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child1",
        className: "heading2",
      },
      [
        React.createElement("h1", {}, "I'm child2 h3 tag"),
        React.createElement("h2", {}, "I'm child2 h4 tag"),
      ]
    ),
  ],
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);

console.log(parent);
