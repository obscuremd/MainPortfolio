import React from 'react';
import Development from './Development';
import GameDevelopment from './GameDevelopment';
import ProductDesign from './ProductDesign';

function Homepage() {
  // Array containing the components
  const components = [<Development />, <GameDevelopment />, <ProductDesign />];

  // Function to select a random component
  const getRandomComponent = () => {
    const randomIndex = Math.floor(Math.random() * components.length);
    return components[randomIndex];
  };

  return (
    <div>
      {getRandomComponent()}
    </div>
  );
}

export default Homepage;
