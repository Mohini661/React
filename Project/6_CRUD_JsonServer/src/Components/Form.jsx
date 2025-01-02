import React from "react";
import { useState } from "react";
import UserData from "./UserData";
import { useEffect } from "react";
import { useRef } from "react";

const Form = () => {
  const [user, setUser] = useState([]);
  const [changeUser, setChangeUser] = useState({});

  const uid = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const phone = useRef();

  const addUser = (e) => {
    e.preventDefault();

    if (uid.current.value === "") {
      fetch("http://localhost:3000/users", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          phone: phone.current.value,
        }),
      });
    } else {
      fetch(`http://localhost:3000/users/${uid.current.value}`, {
        method: "put",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          phone: phone.current.value,
        }),
      });
    }
    uid.current.value = "";
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
    phone.current.value = "";
  };
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setUser(result);
      });
  }, [addUser]);

  const updateUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // setChangeUser(result);
        uid.current.value = result.id;
        username.current.value = result.username;
        email.current.value = result.email;
        password.current.value = result.password;
        phone.current.value = result.phone;
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 card mt-3 mx-auto p-4">
          <h1 align="center"> User Registration</h1>
          <hr />
          <form action="" onSubmit={addUser}>
            <input type="hidden" ref={uid} name="" id="" />
            <div className="form-group fw-bold">
              <label htmlFor="uname">Username:</label>
              <input
                type="text"
                name="uname"
                ref={username}
                placeholder="Enter Username"
                className="form-control mb-2"
              />
            </div>
            <div className="form-group fw-bold">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                ref={email}
                placeholder="Enter Email"
                className="form-control mb-2"
              />
            </div>{" "}
            <div className="form-group fw-bold">
              <label htmlFor="pass">Password:</label>
              <input
                type="text"
                name="pass"
                ref={password}
                placeholder="Enter Password"
                className="form-control mb-2"
              />
            </div>
            <div className="form-group fw-bold">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                name="phone"
                ref={phone}
                placeholder="Enter Phone"
                className="form-control mb-2"
              />
            </div>
            <button className="btn btn-success mt-2">Submit</button>
          </form>
        </div>
        <div className="col-1"></div>
        <div className="col-7 card mt-3 mx-auto p-4">
          <h1 align="center">User Details</h1>
          <hr />
          <table className="table table-hover">
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {user.map((ele) => (
              <UserData
                key={ele.id}
                user={ele}
                updateUser={updateUser}
              ></UserData>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;
