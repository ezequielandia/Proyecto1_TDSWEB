import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Navbar />
      <div className="about-content">
        <h2>Sobre Nosotros</h2>
        <p>Bienvenido a Bom Apetite. Somos un restaurante dedicado a ofrecer comida deliciosa.</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;