import React, {Fragment} from 'react';

import mealsImage from '../Meals/meals.jpeg';

const Header = () => {
  return (
    <Fragment>
      <header>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
