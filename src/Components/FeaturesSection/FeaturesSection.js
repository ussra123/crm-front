import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Key Features</h2>
      <div className="feature-categories">
        <div className="feature-category">
          <h3>Sales</h3>
          <ul>
            <li>Gestion des comptes, des contacts et des prospects</li>
            <li>Prévisions de ventes, tableaux de bord et rapports graphiques</li>
            <li>Suivi des opportunités et des affaires</li>
            <li>Gestion des activités et des agendas</li>
          </ul>
        </div>
        <div className="feature-category">
          <h3>Customer Support</h3>
          <ul>
            <li>Gestion, suivi et traçabilité des tickets</li>
            <li>Gestion des activités et des communications</li>
            <li>Gestion des problématiques clients</li>
            <li>Portail clients accessible 24h/24, 7j/7</li>
          </ul>
        </div>
        <div className="feature-category">
          <h3>Marketing</h3>
          <ul>
            <li>Segmentation et gestion des clients et prospects ciblés</li>
            <li>Planification des opérations commerciales</li>
            <li>Gestion des phases, des étapes et des budgets de chaque campagne</li>
            <li>Analyse de rentabilité</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
