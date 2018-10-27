import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const sideDrawer = props => {
  let attachedClases = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClases = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      
      <div className={attachedClases.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>

          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer