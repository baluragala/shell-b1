import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies" exact>
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies/new">New</NavLink>
      </li>
      <li>
        <NavLink to="/todos">Todos</NavLink>
      </li>
    </ul>
  );
}
