import React from "react";
import ReactDOM from "react-dom/client.js";
import RestaurantList from "./components/restaurantList.js";
import "./app.css";
import Header from "./components/header.js";
import  {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/about.js";
import ContactUs from "./components/contact.js";
import Cart from "./components/cart.js";

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



const App = () => {
  return (
    <div className="res-contianer">
      <Header />
      <Outlet />
      {/* <RestaurantList /> */}
    </div>
  );
};

const appRouter  = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <RestaurantList/>
      },
      {
        path: "/home",
        element: <RestaurantList/>
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  },
  
])


/* ReactDOM takes this object and converts it to HTML and push it to browser. 
By pushing means, it will replace completely instead of appending*/
const root = ReactDOM.createRoot(document.getElementById("root"));

// create html element
// root.render(<App />);


root.render(<RouterProvider  router={appRouter}/>);
// console.log(heading);
// console.log(jsxHeading);
