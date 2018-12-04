import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'
import axios from '../../../axios-order'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
  state = {
    name: "Diego",
    email: "asdfas@fdsa.com",
    address: {
      street: "1234",
      postalCode: "1111"
    },
    loading: false
  }

  orderHandler = event => {
    this.setState({ loading: true }) 
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Diego Ortiz',
        address: {
          street: "1234",
          zipCode: "1111",
          country: "Col"
        },
        email: "pepe@asdfas.com"
      },
      deliveryMethod: 'fastest'
    }
    axios.post ( '/orders.json', order )
      .then( response => {
        this.setState({ loading: false})
        this.props.history.push('/')
      })
      .catch( error => {
        this.setState({ loading: false})
      })
  }
  
  render () {
    let form = (
      <form>
        <Input elementType="input" type="text" name="name" placeholder="Your name" />
        <Input elementType="input" type="email" name="email" placeholder="Your email" />
        <Input elementType="input" type="text" name="street" placeholder="Your street"/>
        <Input elementType="input" type="text" name="postal" placeholder="Your postal code"/>
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    )

    if ( this.state.loading) {
      form = <Spinner />
    }

    return(
      <div className={classes.ContactData}>
        <h4>Enter contact data:</h4>
        {form}
      </div>
    )
  }
}

export default ContactData