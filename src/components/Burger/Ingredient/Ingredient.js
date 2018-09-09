import React from 'react'
import classes from './ingredient.css'

const ingredient = props => {
  let piece = null

  switch (props.type) {
    case ('bread-bottom'):
      piece = <div className={classes.BreadBottom}></div>
      break
    case ('bread-top'):
      piece = <div className={classes.BreadTop}></div>
      break
    case ('meat'):
      piece = <div className={classes.Meat}></div>
      break
    case ('salad'):
      piece = <div className={classes.Salad}></div>
      break
    case ('bacon'):
      piece = <div className={classes.Bacon}></div>
      break
    default:
      piece = null
      break
  }
}

export default ingredient
