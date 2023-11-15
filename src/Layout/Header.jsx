import React from "react";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header({ children }) {
  const [{ basket, isUser }, dispatch] = useStateValue();
  const navigate = useNavigate();
  console.log(isUser);
  function handleClick() {
    dispatch({
      type: "User_Sign_Out",
    });
    navigate(`/`);
  }

  return (
    <>
      <nav className="flex navbar">
        <Link to="/">
          <div className="logo">
            <img src="./logo.png" alt=" "></img>
          </div>
        </Link>
        <div className="log">
          Hello
          <br />
          <span className="bold">
            <i className="fas fa-map-marker-alt"></i>
            Select your address
          </span>
        </div>
        <form className="flex">
          <input type="text" placeholder="Search"></input>
          <button className="btn">
            <Search />
          </button>
        </form>
        <div className="flag"></div>
        {!isUser && (
          <Link to="/Sign-In">
            <div className="log">
              Hello Sign in
              <br />
              <span className="bold">Account & Lists</span>
            </div>
          </Link>
        )}
        <div className="log">
          Return
          <br />
          <span className="bold">& Orders</span>
        </div>
        <Link to="/cart">
          <div className="cart">
            <span className="bold ">
              <span>Cart</span>
              <span className="item-count">{basket.length}</span>
            </span>
          </div>
        </Link>
        {isUser && (
          <div className="log">
            <span className="bold" onClick={handleClick}>
              Log Out
            </span>
          </div>
        )}
      </nav>
      {children}
    </>
  );
}
export default Header;
