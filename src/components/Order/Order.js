import React from 'react'

import classes from './Order.css'

const order = props => {
  return(
    <div className={classes.Order}>
      <p>Ingrediends: sdfasdf</p>
      <p>Price: <strong>123124 USD</strong></p>
    </div>
  )
}

export default order