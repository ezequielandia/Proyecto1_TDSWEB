import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Bom Apetite - Restaurant. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/privacidad">Política de Privacidad</a>
          <a href="/terminos">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;