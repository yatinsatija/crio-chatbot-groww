import React from "react";
import "./DashHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { Redirect, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { useState } from "react";
// import { auth } from "./firebase";

function DashHeader() {
  const basket = useState();
  const history = useNavigate();
  const hello = () => {
    // localStorage.setItem("isLoggedIn", false);
    localStorage.clear();
    history("/");
  };
  const back = () => {
    localStorage.removeItem("order");
    history("./");

    window.location.reload();
  };

  //   //   const handleAuthenticaton = () => {
  //   //     if (user) {
  //   //       auth.signOut();
  //   //     }
  //   //   }
  const name = localStorage.getItem("name");
  const showLogout = () => {
    return (
      <div>
        <form id="add-app">
          <button onClick={(e) => {}}>LOGOUT</button>
        </form>
      </div>
    );
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpW4amDGgPFvBsGmS-kYJZldeRLHX-rtAUVw&usqp=CAU"
        />
      </Link>

      <h2 style={{ color: "white", marginLeft: "2%" }}>
        Hello {localStorage.getItem("name")}
      </h2>

      {/* <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div> */}

      <div className="header__nav" style={{ marginLeft: "45%" }}>
        <div>
          <button onClick={(e) => history("/myorder")}>MY ORDERS</button>
        </div>
        {/* <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link> */}
        <div className="header__option" onClick={(e) => showLogout()}>
          <span>Welcome {name}</span>
        </div>

        <div className="header__option" onClick={(e) => back()}>
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        {/* <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}

        {/* <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link> */}
        <div>
          <button onClick={(e) => hello()}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
}

export default DashHeader;
