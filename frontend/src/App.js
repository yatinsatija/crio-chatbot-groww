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
            {/* <Route path="/" element={<HomePage />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
