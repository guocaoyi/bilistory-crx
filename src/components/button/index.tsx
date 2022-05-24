import React, { Component } from 'react'

import icon from '../../assets/img/logo-128.png'

export class Button extends Component {
  state = {
    name: 'bilistory',
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.name}!</p>
        <img src={icon} alt="extension icon" />
      </div>
    )
  }
}

export default Button
