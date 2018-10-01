import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import Controls from '../../components/Burger/Controls/Controls'

const PRICING = {
  salad: 0.3,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4
  }

  addIngredientHandler = type => {
    const currentQty = this.state.ingredients[type]
    const newQty = currentQty + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newQty

    const pricingAdition = PRICING[type]
    const currentPrice = this.state.totalPrice
    const newPrice = currentPrice + pricingAdition
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })

  }

  removeIngredientHandler = type => {
    const currentQty = this.state.ingredients[type]
    if (currentQty <= 0) {
      return
    }
    const newQty = currentQty - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newQty

    const pricingSubtraction = PRICING[type]
    const currentPrice = this.state.totalPrice
    const newPrice = currentPrice - pricingSubtraction
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
  }

  render() {
    const disabledIngredients = {
      ...this.state.ingredients
    }
    for(let key in disabledIngredients) {
      disabledIngredients[key] = (disabledIngredients[key] <= 0)
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Controls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledIngredients}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder