import React from 'react'
import classes from './Burger.css'
import Ingredient from './Ingredient/Ingredient'

const burger = props => {
  const ingredientsObjectToArray = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, index) => {
        return <Ingredient key={ingredient + index} type={ingredient} />
      })

    })
  return (
    <div className={classes.Burger}>
      <Ingredient type='bread-top' />
      {ingredientsObjectToArray}
      <Ingredient type='bread-bottom' />
    </div>
  )
}

export default burger 