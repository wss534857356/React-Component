import React, { Component } from 'react'
import Shadow from './shadow'

class Touch extends Component {
  getInitialState() {
    return {
      type: 'init';
    }
  }
  click() {
    this.setState({
      type: 'click'
    })
  }
  render() {
    switch(this.props.type) {
      case 'click':
        click();
        break;
      default:
        break;
    }
    let shadow += <Shadow {...this.props,this.state.type}></Shadow>;
    return (
      <div onclick={this.click}>
        {this.props.children}
        {shadow}
      </div>
    )
  }
}

export default Touch