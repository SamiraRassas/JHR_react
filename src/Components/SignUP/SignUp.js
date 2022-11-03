import React from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./SignUp.css"

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    accounttype: "Login as",
  });
  const [message, setMessage] = useState();
  const postData = async () => {
    await fetch(`http://127.0.0.1:4000/signup/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(">>>"+data);
        // const result=JSON.stringify(data, null, 4)

        document.getElementById("res").innerHTML = JSON.stringify(data.message, null, 4)
        // setMessage(data);
      });
  };
  return (
    <article className="br3 ba dark-gray shadow-5 b--black-10  w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={(e) =>
                  setUser((previousState) => {
                    return { ...previousState, email: e.target.value };
                  })
                }
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="Username">
                Username
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={(e) =>
                  setUser((previousState) => {
                    return { ...previousState, username: e.target.value };
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
                value={user.password}
                onChange={(e) =>
                  setUser((previousState) => {
                    return { ...previousState, password: e.target.value };
                  })
                }
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="confirmpassword">
                Confirm Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                value={user.confirmpassword}
                onChange={(e) =>
                  setUser((previousState) => {
                    return {
                      ...previousState,
                      confirmpassword: e.target.value,
                    };
                  })
                }
              />
            </div>
            <DropdownButton id="dropdown-basic-button" title={user.accounttype}>
              <Dropdown.Item
                onClick={() =>
                  setUser((previousState) => {
                    return { ...previousState, accounttype: "Home Owner" };
                  })
                }
              >
                Home Owner
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setUser((previousState) => {
                    return { ...previousState, accounttype: "Home Buyer" };
                  })
                }
              >
                Home Buyer
              </Dropdown.Item>
            </DropdownButton>
          </fieldset>
          <div id="res"></div>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign up"
              onClick={() => postData()}
            />
          </div>
        </div>
      </main>
    </article>
  );
}
