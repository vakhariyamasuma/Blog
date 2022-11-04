import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClickEvent = () => {
    let result = auth()
      ? navigate("/")
      : setError("Either Username/Password is invalid!!!");
  };

  const auth = () => {
    let isLoggedIn = false;
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    for (let i of user) {
      isLoggedIn =
        i.userName === username && i.password === password ? true : false;
      if (isLoggedIn) {
        localStorage.setItem("userData", JSON.stringify(i));
        break;
      }
    }

    return isLoggedIn;
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-4">
          <div className="mb-3">{error ? <div>{error}</div> : ""}</div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setUsername(event.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={handleClickEvent}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
