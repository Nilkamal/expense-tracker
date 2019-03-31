import React from "react";
import Logo from "./Expense.png";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div class="logo">
        <Link to="/">
          <img src={Logo} alt="Expense Logo" />
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link exact to="/">
              Home
            </Link>
            <Link exact to="/Category">
              Add Category
            </Link>
            <Link exact to="/Expense">
              Add Expense
            </Link>
            <Link exact to="/Income">
              Add Income
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
