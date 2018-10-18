import React from 'react'
import classes from './Controls.css'
import Control from '../Controls/Control/Control'

const thecontrols = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' }
]

const controls = props => (
  <div className={classes.BuildControls}>
    <p>Total price is: <strong>{props.price.toFixed(2)}</strong></p>
    {thecontrols.map(thecon => (
      <Control 
        key={thecon.label} 
        label={thecon.label} 
        added={() => props.ingredientAdded(thecon.type)}
        removed={() => props.ingredientRemoved(thecon.type)}
        disabled={props.disabled[thecon.type]} />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasibility}
      onClick={props.ordered}>
      ORDER NOW
    </button>
  </div>
)

export default controls;