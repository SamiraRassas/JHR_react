import React from "react";
import "./profile.css";
import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  console.log(user);
//   const postData = async () => {
//     await fetch(`http://127.0.0.1:4000/login/`, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(user),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         document.getElementById("res").innerHTML = JSON.stringify(
//           data.message,
//           null,
//           4
//         );
//       });
//       navigate('../home', { replace: true })
//   };
  return (
    <>
      <div>
HELLO: 
      </div>
    </>
  );
};
export default Profile;
