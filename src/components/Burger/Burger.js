import React from 'react'
import classes from './Burger.css'
import Ingredient from './Ingredient/Ingredient'

const burger = props => {
  let ingredientsObjectToArray = Object.keys(props.ingredients)
    .map(ingredi => {
      return [...Array(props.ingredients[ingredi])].map((_, i) => {
        return <Ingredient key={ingredi + i} type={ingredi} />
      })
    })
    .reduce((acumulator, current) => {
      return acumulator.concat(current)
    }, [])

  if(ingredientsObjectToArray.length === 0) {
    ingredientsObjectToArray = <p>Please start adding ingredients</p>
  }
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {ingredientsObjectToArray}
      <Ingredient type="bread-bottom" />
    </div>
  )
}

export default burger 