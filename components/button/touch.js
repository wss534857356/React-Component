import React, { Component } from 'react'
import Shadow from './shadow'

class Touch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'init',
      shadow: []
    };
  }
  click() {
    this.setState({
      type: 'click',
      shadow: this.state.shadow.push(<Shadow {...this.props}></Shadow>)
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
    const dom = (
      <div>
        {this.props.children}
        {this.state.shadow}
      </div>)
    return (
      <div>
        {dom}
        
      </div>
    )
  }
}

export default Touch