import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <header id="navbar">
      <ul>
        <li className="navLink">
          <Link to="/articles">Home</Link>
        </li>
        <li className="navLink">
          <Link to="/categories/1">Politics</Link>
        </li>
        <li className="navLink">
          <Link to="/categories/2">Science</Link>
        </li>
        <li className="navLink">
          <Link to="/categories/3">Technology</Link>
        </li>
        <li className="navLink">
          <Link to="/categories/4">Business</Link>
        </li>
        <li className="navLink">
          <Link to="/categories/5">Human Interest</Link>
        </li>
        <li className="navLink">
          <Link to="/articles/new">Admin</Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar;
