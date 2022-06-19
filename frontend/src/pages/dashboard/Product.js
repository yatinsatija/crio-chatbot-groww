import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import Axios, * as others from "axios";

function Product({ id, productname, currentprice, idvalue, idper, image }) {
  const [basket, dispatch] = useState({});
  const temp2 = () => {
    console.log("Item Sold");
  };

  const addToBasket = () => {
    // dispatch the item into the data layer
    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   item: {
    //     id: id,
    //     productname: productname,
    //     currentprice: currentprice,
    //     idvalue: idvalue,
    //     idper: idper,
    //     image: image,
    //   },
    // });
    if (localStorage.getItem("isLoggedIn") === "true") {
      Axios.post("http://localhost:3001/addproduct", {
        username: localStorage.getItem("email"),
        product: {
          id: id,
          productname: productname,
          currentprice: currentprice,
          idvalue: idvalue,
          idper: idper,
          image: image,
        },
      }).then((response) => {
        console.log(response);
        alert("Item Bought");
      });
    } else {
      alert("Please Log In First");
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{productname}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{currentprice}</strong>
        </p>
        <div className="product__rating">
          <small>₹</small>
          <strong>{idvalue}&nbsp;</strong>
          <small> </small>
          <div className="product__rating">
            <small> </small>
            <></>
            <strong>{idper}%</strong>
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

export default Product;
