// import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingHeader from "./components/navbar/LandingHeader";
import HomePage from "./pages/HomePage";
import Registration from "./pages/registration/Registration";
import CustomerSignIn from "./pages/signin/SignIn";
import CSHeader from "./components/csheader/CSHeader";
import DashHeader from "./pages/dashboard/dashHeader/DashHeader";
import Dashboard from "./pages/dashboard/Dashboard";
import Checkout from "./pages/uploading/Checkout.component";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <LandingHeader />
                  <HomePage />
                </>
              }
            />
            <Route
              exact
              path="/register"
              element={
                <>
                  <LandingHeader />
                  <Registration />
                </>
              }
            />
            <Route
              exact
              path="/signin"
              element={
                <>
                  <LandingHeader />
                  <br />
                  <CustomerSignIn />
                </>
              }
            />
            <Route
              exact
              path="/upload"
              element={
                <>
                  <CSHeader />
                  <br />
                  <Checkout />
                </>
              }
            />
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route
              exact
              path="/dashboard"
              element={
                <>
                  <DashHeader />
                  <Dashboard />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
