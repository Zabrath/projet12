import React from 'react';
import './Footer.scss';

function Footer() {
  const smoothScroll = (event, target) => {
    event.preventDefault();
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className="footer" id="footer">
      <nav className="footer__nav">
        <a href="#home" onClick={(event) => smoothScroll(event, '#home')}>Accueil</a>
        <a href="#infos" onClick={(event) => smoothScroll(event, '#infos')}>Infos</a>
        <a href="#projets" onClick={(event) => smoothScroll(event, '#projets')}>Projets</a>
        <a href="#skills" onClick={(event) => smoothScroll(event, '#skills')}>Compétences</a>
      </nav>
    </header>
  );
}

export default Footer;
