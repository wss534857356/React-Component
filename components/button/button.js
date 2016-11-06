import React, { Component } from 'react'
import Touch from './touch'

class Button extends Component {
  render() {
    return (
      <Touch {...this.props}>
        <button ></button>
      </Touch>
    )
  }
}