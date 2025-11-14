import React from 'react';
import './Header.css';
import logo from '../logo.svg';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="EWZ Pinturas" className="logo-icon" />
          <span className="logo-text">EWZ Pinturas</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('sobre')} className="nav-link">Sobre nós</button>
          <button onClick={() => scrollToSection('galeria')} className="nav-link">Galeria</button>
          <button onClick={() => scrollToSection('contato')} className="nav-link">Contato</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

