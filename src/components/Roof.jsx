import React from 'react';
import './Roof.css';
import roofImage from '../assets/foodtruckimage.jpg';

const Roof = () => {
  return (
    <div className="roof" style={{ backgroundImage: `url(${roofImage})` }}></div>
  );
}

export default Roof;
