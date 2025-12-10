import React, { useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", data);
      login(res.data.token);
    } catch (err) {
      setMsg("Invalid credentials");
    }
  };

  return (
    <div className="container fade-in">
      <div className="card glass slide-up">
        <h2>Login</h2>

        <form onSubmit={submit}>
          <input type="email" placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })} />

          <input type="password" placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })} />

          <button className="btn-primary">Login</button>
        </form>

        <p className="msg">{msg}</p>

        <p className="link-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
