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
    {thecontrols.map(thecon => (
      <Control 
        key={thecon.label} 
        label={thecon.label} 
        added={() => props.ingredientAdded(thecon.type)}
        />
    ))}

  </div>
)

export default controls;