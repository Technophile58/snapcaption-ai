import React, { useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", data);
      setMsg("Registered Successfully!");
    } catch {
      setMsg("Error occurred");
    }
  };

  return (
    <div className="container fade-in">
      <div className="card glass slide-up">
        <h2>Register</h2>

        <form onSubmit={submit}>
          <input type="text" placeholder="Username"
            onChange={(e) => setData({ ...data, username: e.target.value })} />

          <input type="email" placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })} />

          <input type="password" placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })} />

          <button className="btn-primary">Register</button>
        </form>

        <p className="msg">{msg}</p>

        <p className="link-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
