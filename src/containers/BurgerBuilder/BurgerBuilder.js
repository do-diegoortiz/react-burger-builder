import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import Controls from '../../components/Burger/Controls/Controls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingr => {
        return ingredients[ingr]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    this.setState({ purchasable: sum > 1 })
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

    this.updatePurchasable(updatedIngredients)
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

    this.updatePurchasable(updatedIngredients)
  }

  purchasingHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    alert("You continue!")
  }

  render() {
    const disabledIngredients = {
      ...this.state.ingredients
    }
    for (let key in disabledIngredients) {
      disabledIngredients[key] = (disabledIngredients[key] <= 0)
    }

    return (
      <Aux>
        <Modal 
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients}
            cancelOrder={this.purchaseCancelHandler}
            continueOrder={this.purchaseContinueHandler}
            price={this.state.totalPrice}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <Controls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          purchasibility={this.state.purchasable}
          ordered={this.purchasingHandler}
          disabled={disabledIngredients}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder