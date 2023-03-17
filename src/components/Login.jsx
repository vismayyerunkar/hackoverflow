import React, { useContext, useState } from "react";
import "../Styles/signup.css";

function Login() {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.success("All fields are required");
//       return;
//     }

//     if (password.length < 8) {
//       toast.success("Password must be 8 letter");
//     }

//     const res = axios
//       .post("http://localhost:4000/api/login", {
//         email,
//         password,
//       })
//       .then((res) => {
//         if (res.data.success === "true") {
//           setCookie("token", res.data.token);
//           toast.success(`${res.data.user.name}! Logged in`);
//           console.log(res.data.user);
//           setUser(res.data.user);
//           let userstring = JSON.stringify(res.data.user);
//           sessionStorage.setItem("user", userstring);
//           // getuser();
//           navigate("/");
//           // console.log(res.data);
//         } else {
//           toast.success(`Wrong credentials`);
//         }
//       })
//       .catch((err) => console.log(err));
//   };

  return (
    <form>
      <div className="signin-div">
        <div className="signin-left">
          <div className="signin-left-upper">
            <h3>Login</h3>
          </div>
          <div className="signin-left-lower">
            <input
              type="number"
              name="contact"
              placeholder="Enter Contact"
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <input
              type="password"
              name="current-password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button>Login</button>

            <small className="lower-small">
              Need an account ? <a href="/signin"> SIGN UP </a>
            </small>
          </div>
        </div>
        <div className="signin-right">
          <img
            src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif"
            alt=""
          />
        </div>
      </div>
    </form>
  );
}

export default Login;