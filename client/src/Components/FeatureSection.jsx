import React from 'react';
import './FeatureSection.css';
import ew2Image from './Images/ew2.png'
import ew3Image from './Images/ew3.jpg'
import ew4Image from './Images/ew4.jpg'
function FeatureSection() {
  const featureData = [
    {
      icon: ew3Image,
      title: 'Domestic Money Transfer',
      description: 'Send money to any bank account across India instantly.'
    },
    {
        icon: ew4Image,
        title: 'Pay Contacts',
        description: 'Send money to all your contacts across world'
    },
    {
      icon: ew2Image,
      title: 'Recharge & Bill Payments',
      description: 'Recharge your mobile, DTH, and pay bills with ease.'
    },
  ];

  return (
    <section className="feature-section">
      <div className="container">
      <h1 className="welcome-container">Welcome to E Wallet</h1>
        <div className="feature-cards">
          {featureData.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.icon} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;