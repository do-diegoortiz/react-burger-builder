import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Ingredient.css'

class Ingredient extends Component {
  render() {
    let piece = null

    switch (this.props.type) {
      case ('bread-bottom'):
        piece = <div className={classes.BreadBottom}></div>
        break
      case ('bread-top'):
        piece = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        )
        break
      case ('meat'):
        piece = <div className={classes.Meat}></div>
        break
      case ('cheese'):
        piece = <div className={classes.Cheese}></div>
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

    return piece
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.required
}

export default Ingredient
