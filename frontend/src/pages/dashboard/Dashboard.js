import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Product from "./Product";
import Fd from "./Fd";
import Mf from "./Mf";

import Axios from "axios";
import { Redirect, useNavigate } from "react-router-dom";

function Dashboard() {
  const [stocks, setStockList] = React.useState([]);
  const [mfs, setMfList] = React.useState([]);

  const [fds, setFdList] = React.useState([]);

  const history = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/stocks").then((response) => {
      setStockList(response.data);
      // console.log("stocks" + stocks[0].productname);
    });
    Axios.get("http://localhost:3001/mf").then((response) => {
      setMfList(response.data);
      console.log("mfs" + mfs[0].productname);
    });
    Axios.get("http://localhost:3001/fd").then((response) => {
      setFdList(response.data);
      console.log("fds" + fds[0].companyname);
    });
  }, []);

  // const getMedicines = () => {
  //   Axios.get("http://localhost:3001/medicines").then((response) => {
  //     setMedicineList(response.data);
  //   });
  // };

  return (
    <div className="home">
      {/* {localStorage.getItem("isLoggedIn") === "true" ? (
        <
      ) : (
        <div>{(alert("Log In First"), history("./signin"))}</div>
      )} */}
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="EPharma"
          style={{ height: "90vh", width: "200vh" }}
        />
        <div className="home__row">
          {/* <Product
              id="12321341"
              title="PARACETEMOL"
              price={11.96}
              rating={5}
              image="https://m.jagranjosh.com/imported/images/E/GK/paracetamol-tablets-export.jpg"
            />
            <Product
              id="49538094"
              title="NEMULID TABLETS"
              price={11.0}
              rating={4}
              image="https://www.medwik.in/wp-content/uploads/2020/08/nimulid-tablet.jpg"
            /> */}
        </div>
        <h1>Stocks</h1>
        <div className="home__row">
          {stocks.map((val, key) => {
            console.log("name " + val.productname);

            return (
              <Product
                id={val.id}
                productname={val.productname}
                currentprice={val.currentprice}
                idvalue={val.idvalue}
                idper={val.idper}
                image={val.img}
              />
            );
          })}
          {/* <Product
              id="4903850"
              title="Benedryl"
              price={199.99}
              rating={3}
              image="https://4.imimg.com/data4/CL/JC/ANDROID-56501799/product-500x500.jpeg"
            />
            <Product
              id="23445930"
              title="DIGENE LIQUID"
              price={98.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61YJWZrai-L._SL1500_.jpg"
            />
            <Product
              id="3254354345"
              title="TETANUS SHORTS"
              price={598.99}
              rating={4}
              image="https://5.imimg.com/data5/ZL/ZK/UC/SELLER-41272859/tetanus-toxoid-vaccine-adsorbed-250x250.jpg"
            /> */}
        </div>
        <h1>Mutual Funds</h1>
        <div className="home__row">
          {mfs.map((val, key) => {
            console.log("mfs " + val.productname);

            return (
              <Mf
                id={val.id}
                productname={val.productname}
                percentage={val.percentage}
                year={val.year}
                image={val.img}
              />
            );
          })}
          {/* <Product
              id="4903850"
              title="Benedryl"
              price={199.99}
              rating={3}
              image="https://4.imimg.com/data4/CL/JC/ANDROID-56501799/product-500x500.jpeg"
            />
            <Product
              id="23445930"
              title="DIGENE LIQUID"
              price={98.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61YJWZrai-L._SL1500_.jpg"
            />
            <Product
              id="3254354345"
              title="TETANUS SHORTS"
              price={598.99}
              rating={4}
              image="https://5.imimg.com/data5/ZL/ZK/UC/SELLER-41272859/tetanus-toxoid-vaccine-adsorbed-250x250.jpg"
            /> */}
        </div>
        <h1>Fixed Deposits</h1>
        <div className="home__row">
          {fds.map((val, key) => {
            console.log("fds " + val.companyname);

            return (
              <Fd
                id={val.id}
                companyname={val.companyname}
                percentage={val.percentage}
                year={val.year}
                image={val.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
