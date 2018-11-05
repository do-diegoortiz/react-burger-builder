import React, { Component } from 'react'

import Order from '../../components/Order/Order'
import axios from '../../axios-order'

class Orders extends Component {
  /* componentDidMount() {
    axios.get('/orders.json')
      .then(console.log(response))
  } */

  render() {
    return(
      <div>
        <Order />
        <Order />
      </div>
      
    )
  }
}

export default Orders