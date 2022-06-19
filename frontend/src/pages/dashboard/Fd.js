import React from "react";
import "./Fd.css";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import Axios from "axios";
function Fd({ id, companyname, percentage, year, image }) {
  const [basket, dispatch] = useState({});

  const addToBasket = () => {
    // dispatch the item into the data layer
    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   item: {
    //     id: id,
    //     companyname: companyname,
    //     percentage: percentage,
    //     year: year,

    //     image: image,
    //   },
    // });
    if (localStorage.getItem("isLoggedIn") === "true") {
      Axios.post("http://localhost:3001/addfd", {
        username: localStorage.getItem("email"),
        fds: {
          id: id,
          companyname: companyname,
          percentage: percentage,
          year: year,

          image: image,
        },
      }).then((response) => {
        console.log(response);
        alert("Item bought");
      });
    } else {
      alert("Please Log In First");
    }
  };
  const temp2 = () => {
    // console.log("Item Sold");
    console.log("Item Sold");
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{companyname}</p>
        <p className="product__price">
          {/* <small>₹</small> */}
          <strong>{percentage}%</strong>
        </p>
        <div className="product__rating">
          {/* <small>₹</small> */}
          <strong>{year}&nbsp;</strong>
          <small>Y </small>
          <div className="product__rating">
            <small> </small>
            <></>
            {/* <strong>{idper}%</strong> */}
          </div>
        </div>
      </div>

      <img src={image} alt="" />

      {window.location.pathname === "/dashboard" ? (
        <>
          <button onClick={addToBasket}>BUY</button>
        </>
      ) : (
        <>
          <button onClick={temp2()}>SELL</button>
        </>
      )}
    </div>
  );
}

export default Fd;
