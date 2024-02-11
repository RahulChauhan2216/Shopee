import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{
          padding: "15px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "gray",
        }}
      >
        <h1 style={{ fontSize: "30px" }}>Shopee</h1>
        <ul style={{ display: "flex", gap: "15px" }}>
          <NavLink to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Products
          </NavLink>
          <NavLink
            to={"/about"}
            style={{ textDecoration: "none", color: "black" }}
          >
            About
          </NavLink>
          <NavLink
            to={"/contact"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact
          </NavLink>
          <NavLink
            to={"/login"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </NavLink>
          <NavLink
            to={"/cart"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Cart
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
