import React from 'react';
import img from "../images/Pasted image.png";
import "../components/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={img} alt="Company Logo" />
      </div>
      <nav>
        <ul className='nav-bar'>
        <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/menu">Menu</a></li>
    <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
