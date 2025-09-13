import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">🌱 AgriMarket</Link>
      </div>
      <div className="navbar-right">
        {user ? (
          <>
            <span>Hello, {user.name}</span>
            <button className="btn btn-outline" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/" className="btn btn-primary" style={{textDecoration:"none",padding:"10px 30px",marginBottom:"16px"}}>Home</Link>
            <Link to="/about" className="btn btn-outline" style={{textDecoration:"none"}}>About</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
