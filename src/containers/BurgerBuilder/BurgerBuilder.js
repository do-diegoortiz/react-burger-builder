import React, {Component} from 'react'
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
    console.log(type)
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})

  }

  removeIngredientHandler = type => {

  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <Controls 
          ingredientAdded = {this.addIngredientHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder