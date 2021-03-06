import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  console.log(props.ingredients.meat);
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      console.log(props.ingredients[ingKey]);
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey+i} type={ingKey} />
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
  console.log(transformedIngredients);
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p><strong>Please start adding ingredients!</strong></p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
