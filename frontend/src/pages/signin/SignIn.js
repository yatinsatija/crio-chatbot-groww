import React from "react";
import "tachyons";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Redirect, useNavigate } from "react-router-dom";
// import { auth , firestore} from '../../backend/server';
import "./SignIn.css";
export default function CustomerSignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
  const mystyle = {
    backgroundColor: "#d9e4f5",
    backgroundImage: "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)",
  };
  const login = () => {
    if (
      username.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ) == null
    ) {
      alert("Enter Valid Email");
    } else {
      Axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
      }).then((response) => {
        console.log(response.data);
        if (response.data.message) {
          setLoginStatus(response.data.message);
          alert(response.data.message);

          // console.log("Hello");
        } else {
          setLoginStatus(response.data[0].email);
          localStorage.setItem("name", response.data[0].name);
          localStorage.setItem("email", response.data[0].email);
          // Axios.get("http://localhost:3000/");
          // <Redirect to="http://localhost:3000/epharmacy" />;
          console.log("YES");
          localStorage.setItem("isLoggedIn", "true");
          // alert("LoggedIn");
          history("/dashboard");
        }
      });
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].email);
        console.log(loginStatus);
        localStorage.setItem("name", response.data.user[0].name);
      }
    });
  }, []);

  return (
    <article
      style={mystyle}
      className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
    >
      <br />
      <br />
      <br />
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Customer Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 x"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 x"
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <div className="mv3">
            <input
              onClick={login}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib x"
              type="submit"
              value="Sign in"
            />
          </div>
        </div>
      </main>
    </article>
  );
}
