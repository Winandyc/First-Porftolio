import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import './style.scss';

const ButtonNavigate = () => {
  return (
    <div className="container">
      <RouterLink to="/home">
        <button className="navigate-button">Allons y !</button>
      </RouterLink>
    </div>
  );
};

export default ButtonNavigate;
