import React, { Component } from 'react'

import Button from '../../components/UI/Button/Button'

class Auth extends Component {
  render () {
    state = {
      controls: {
        email: {
          elementInput: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Correo'
          },
          value: '',
          validation: {
            required: true,
            isEmail: true
          },
          valid: false, 
          touched: false
        },
        password: {
          elementInput: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Contraseña'
          },
          value: '',
          validation: {
            required: true,
            minLength: 6
          },
          valid: false, 
          touched: false
        }
      }
    }
    return (
      <div>
        <form></form>
      </div>
    )
  }
}

 export default Auth