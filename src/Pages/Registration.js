import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  let navigate = useNavigate();
  let userData = {
    fullName: "",
    userName: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(userData);
  //   let currentUsers = localStorage.getItem("user");
  //   currentUsers = JSON.parse(currentUsers);
  //   console.log("user => ", currentUsers);
  const handleClickEvent = () => {
    let currentUsers = localStorage.getItem("user");
    if (currentUsers) {
      currentUsers = JSON.parse(currentUsers); // convert to its original format from string
      currentUsers.push(user);
      localStorage.setItem("user", JSON.stringify(currentUsers));
    } else {
      let userArray = [];
      userArray.push(user);
      localStorage.setItem("user", JSON.stringify(userArray));
    }
    navigate("/login");
    //convert to string
  };
  //   console.log(user);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-4">
          <h2>Signup</h2>
          {/* <div className="mb-3">{error ? <div>{error}</div> : ""}</div> */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => {
                setUser({ ...user, fullName: event.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) =>
                setUser({ ...user, userName: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              //   onChange={(event) => setUsername(event.target.value)}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              //   onChange={(event) => setPassword(event.target.value)}
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
          </div>
          {/* <div className="mb-3">
            <label className="form-label">Re-Enter Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              //   onChange={(event) => setPassword(event.target.value)}
            />
          </div> */}

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
