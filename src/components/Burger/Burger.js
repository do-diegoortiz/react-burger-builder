import React from 'react'
import classes from './Burger.css'
import Ingredient from './Ingredient/Ingredient'

const burger = props => {
  let ingredientsObjectToArray = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, index) => {
        return <Ingredient key={ingredient + index} type={ingredient} />
      })
    })
    .reduce((acumulator, current) => {
      return acumulator.concat(current)
    }, [])
    if(ingredientsObjectToArray.length === 0) {
      ingredientsObjectToArray = <p>Please start adding ingredients</p>
    }
    console.log(ingredientsObjectToArray)
  return (
    <div className={classes.Burger}>
      <Ingredient type='bread-top' />
      {ingredientsObjectToArray}
      <Ingredient type='bread-bottom' />
    </div>
  )
}

export default burger 