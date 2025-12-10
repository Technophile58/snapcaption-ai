import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h2 className="logo fade-in">SnapCaption AI</h2>

        <div className="nav-links">
          {!token ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <Link to="/caption">Generate</Link>
              <button className="logout-btn" onClick={logout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
