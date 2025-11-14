import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <h2 className="about-title">Sobre nós</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            🖌️ Pintura residencial, industrial e comercial, limpeza e pintura de telhados impermeabilização e texturas em geral.

            </p>
            <p>
            ✨ Somos especialistas em texturas projetadas, que unem beleza e proteção para o seu ambiente.
Além de proporcionar um acabamento decorativo diferenciado, esse tipo de revestimento atua na prevenção de infiltrações, mofo e fungos.
Sua superfície é lavável, garantindo mais praticidade, durabilidade e dispensando pintura, pois a massa pode ser pigmentada na cor desejada.
            </p>
          </div>
          <div className="services-grid">
            <div className="services-column">
              <h3 className="services-title">Serviços Internos</h3>
              <ul className="services-list">
                <li>Pintura Interna</li>
                <li>Massa corrida</li>
                <li>Texturas em geral</li>
                <li>Cimento queimado</li>
                <li>Impermeabilização interna</li>
              </ul>
            </div>
            <div className="services-column">
              <h3 className="services-title">Serviços Externos</h3>
              <ul className="services-list">
                <li>Pintura externa</li>
                <li>Pintura de Decks</li>
                <li>Limpeza de telhados</li>
                <li>Pintura de telhados</li>
                <li>Impermeabilização externa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

