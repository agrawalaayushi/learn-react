import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState(0);

  const handleLogin = () => {
    setLogin(!login);
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-purple-800 items-center">
      <img className="w-16 h-16 m-3" src={logo} />

      <ul className="flex items-center pt-3 m-3 text-slate-50 ">
        <li>{onlineStatus ? "🟢": "🔴"}</li>
        <li className="px-3">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="px-3">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-3">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className="px-3">
          <Link to="/cart">Cart</Link>
        </li>
        <button
          className="border-solid border-2 border-slate-50 rounded-md p-2"
          onClick={handleLogin}
        >
          {login ? "Login" : "Logout"}
        </button>
      </ul>
    </div>
  );
};
export default Header;
