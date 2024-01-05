import React from "react";
import ReactDOM from "react-dom/client.js";
import Search from "./components/search.js";
import RestaurantList from "./components/restaurantList.js";
import './app.css'
// React.createElement => Object => when we render this object onto DOM => becomes HTMLElemet(render)

// created a react object; React.createElement is core of react
const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "My app from scratch from create element"
);

// JSX (transpiled before it reaches the JS engine)
// JSX => Babel transpiles it to React.createELement => ReactElement JS object  => HTMLElement (render)
const jsxHeading = <h1 id="jsxheading">Hello from using JSX</h1>;

/* ReactDOM takes this object and converts it to HTML and push it to browser. 
By pushing means, it will replace completely instead of appending*/
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Implementing React Component
 */

const App = () => {
  return (
    <div className="res-contianer">
      <Search />
      <RestaurantList />
    </div>
  );
};

export default App;
// create html element
root.render(<App />);

// console.log(heading);
// console.log(jsxHeading);
