import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className='logo'>colors</Link>
        <div className="header_menu">
          <Link to="/" className='header_menu_item'>home</Link>
          <Link to="/" className='header_menu_item'>about</Link>
          <Link to="/" className='header_menu_item'>palette</Link>
          <Link to="/shadow" className='header_menu_item'>shadow</Link>
        </div>
      </header>
    </>
  );
}

export default Header