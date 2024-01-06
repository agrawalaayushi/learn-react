import { useState } from "react";

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
          <li className="item"><a href="/">Home</a></li>
          <li className="item"><a href="/about-us">About Us</a></li>
          <li className="item"><a href="/contact-us">Contact Us</a></li>
          <li className="item"><a href="/cart">Cart</a></li>
          <button className="login-btn" onClick={handleLogin}>{login ? "Login" : "Logout"}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
