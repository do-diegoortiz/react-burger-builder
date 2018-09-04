import React from 'react'
import Aux from '../../hoc/Auxiliary'

const layout = props => (
  <Aux>
    <p>Toolbat, SideDrawer and Backdrop</p>
    <main>
      {props.children}
    </main>
  </Aux>
)

export default layout