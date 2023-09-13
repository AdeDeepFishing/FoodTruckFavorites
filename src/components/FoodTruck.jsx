import React from 'react';
import './FoodTruck.css';

const FoodTruck = ({name, theme, description, imageUrl, location, menuLink}) => {
  return (
    <div className={`food-truck ${theme}`}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>Type:</strong> {location}</p>
      <a href={menuLink} target="_blank" rel="noopener noreferrer">
        <button>View Menu</button>
      </a>
    </div>
  );
}

export default FoodTruck;
