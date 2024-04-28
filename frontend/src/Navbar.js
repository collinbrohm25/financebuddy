import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useContext } from 'react';
import UserContext from './context/UserContext';

export default function Navbar() {
  const { userData, setUserData } = useContext(UserContext);
  const isNotLoggedIn = Boolean (userData.token === undefined);

  return (
    <nav className="nav">
      <ul>
        <CustomLink to={isNotLoggedIn ? "home" : "/loggedin"} className="link">Home</CustomLink>
        <CustomLink to="/hopetracker" className="link">Hope Tracker</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}