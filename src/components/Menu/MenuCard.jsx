import React from 'react';
import './MenuCard.css';

const MenuCard = ({ imageUrl, itemName, description, price }) => {
  return (
    <div className="menu-card">
      <img src={imageUrl} alt={itemName} className="menu-card-image" />
      <div className="menu-card-content">
        <h3 className="menu-card-title">{itemName}</h3>
        <p className="menu-card-description">{description}</p>
        <p className="menu-card-price">{price}</p>
      </div>
    </div>
  );
};

export default MenuCard;