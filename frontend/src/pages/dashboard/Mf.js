import React from "react";
import "./Mf.css";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import Axios from "axios";

function Mf({ id, productname, percentage, year, image }) {
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
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{productname}</p>
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

      <button onClick={addToBasket}>BUY</button>
    </div>
  );
}

export default Mf;
