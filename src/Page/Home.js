import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import FormProduct from "../Form/FormProduct";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <ul className="nav justify-content-center bg-dark ">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/form">
              Form
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/404">
              404
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/redux">
              Demo Redux
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    );
  }
}
