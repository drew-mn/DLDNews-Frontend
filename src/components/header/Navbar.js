import React from 'react';

const Navbar = (props) => {
  return (
    <header id="navbar">
      <ul>
        <li className="navLink">
          <a href="/"/>Politics
        </li>
        <li className="navLink">
          <a href="/"/>Science
        </li>
        <li className="navLink">
          <a href="/"/>Technology
        </li>
        <li className="navLink">
          <a href="/"/>Business
        </li>
        <li className="navLink">
          <a href="/"/>Human Interest
        </li>
      </ul>
    </header>
  )
}

export default Navbar;
