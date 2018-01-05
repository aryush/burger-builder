import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  console.log(props.ingredients.meat);
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      console.log(props.ingredients[ingKey]);
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey+i} type={ingKey} />
      })
    });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
