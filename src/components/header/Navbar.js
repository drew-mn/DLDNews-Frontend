import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <header id="navbar">
      <ul>
        <li className="navLink">
          <Link to="/articles/politics">Politics</Link>
        </li>
        <li className="navLink">
          <Link to="/articles/science">Science</Link>
        </li>
        <li className="navLink">
          <Link to="/articles/science">Technology</Link>
        </li>
        <li className="navLink">
          <Link to="/articles/business">Business</Link>
        </li>
        <li className="navLink">
          <Link to="/articles/humaninterest">Human Interest</Link>
        </li>
        <li className="navLink">
          <Link to="/articles/new">Admin</Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar;
