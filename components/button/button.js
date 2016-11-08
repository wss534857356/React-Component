import React, { Component } from 'react'
import Touch from './touch'

class Button extends Component {
  render() {
    return (
      <button>
        <Touch {...this.props}>
          {this.props.children}
        </Touch>
      </button>
    )
  }
}

export default Button