import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Bom Apetite - Restaurant</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Menú</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link to="#contact" className="nav-link">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;