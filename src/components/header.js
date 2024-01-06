import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState(0);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className="header">
      <div>
        <img className="logo" src="../../logo.png" />
      </div>
      <div >
        <ul className="nav-items">
          <li className="item"><Link to="/">Home</Link></li>
          <li className="item"><Link to="/about-us">About Us</Link></li>
          <li className="item"><Link to="/contact-us">Contact Us</Link></li>
          <li className="item"><Link to="/cart">Cart</Link></li>
          <button className="login-btn" onClick={handleLogin}>{login ? "Login" : "Logout"}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
