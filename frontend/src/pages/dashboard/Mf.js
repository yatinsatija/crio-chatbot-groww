import React, { useEffect } from "react";
import "./Mf.css";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import Axios from "axios";

function Mf({ id, productname, percentage, year, image }) {
  const [basket, dispatch] = useState({});
  const [location, setLocation] = useState();
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  const temp2 = () => {
    console.log("Item Sold");
  };

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
      Axios.post("http://localhost:3001/addmf", {
        username: localStorage.getItem("email"),
        mfs: {
          id: id,
          productname: productname,
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

  return (
    <div className="product">
      <div className="product__info">
        <p>{productname}</p>
        {location === "/dashboard" ? (
          <>
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
          </>
        ) : (
          <></>
        )}
      </div>

      <img src={image} alt="" />
      {/* {console.log(window.location.pathname)} */}
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

export default Mf;
