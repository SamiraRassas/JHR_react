import React from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  console.log(user);
  const postData = async () => {
    await fetch(`http://127.0.0.1:4000/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("res").innerHTML = JSON.stringify(
          data.message,
          null,
          4
        );
      });
      navigate('../home', { replace: true })
  };
  return (
    <>
      <div className="center">
        <article className="br3 ba dark-gray  b--black-10  w-100 w-50-m w-25-l mw6 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Login</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) =>setUser((previousState) => {
                      return { ...previousState, email: e.target.value };
                    })
                  }
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) =>setUser((previousState) => {
                      return { ...previousState, password: e.target.value };
                    })
                  }
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                  onClick={() => postData()}
                />
              </div>
              <div id="res"></div>
              <div className="lh-copy mt3">
                <Link to="/signup" className="f6 link dim black db pointer">
                  Sign up
                </Link>
              </div>
            </div>
          </main>
        </article>
      </div>
    </>
  );
};
export default SignIn;
