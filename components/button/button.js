import React, { Component } from 'react'
import Touch from './touch'
import Shadow from './shadow'
import { findDOMNode } from 'react-dom'

const style = {
  box: {
    display:'block',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    marginTop: '20px',
    width: '20%'
  },
  button: {
    width: '100%',
    padding: 0,
    margin: 0,
    textDecoration: 'none',
    height: '36px',
    lineHeight: '36px',
    textAlgin: 'center',
    backgroundColor: '#2196F3',
    borderRadius: '2px',
    border: '10px',
    boxSizing: 'border-box',
    display: 'inline-block',
    cursor: 'pointer',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    color: '#FFF',
    position: 'relative',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
  fontBox: {
    height: '36px',
    borderRadius: '2px',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    top: 0
  },
  fontStyle: {
    position: 'relative',
    color: 'rgb(255, 255, 255)',
    userSelect: 'none',
    paddingLeft: '0',
    paddingRight: '0',
    margin: 0,
    fontWeight: '500',
    textTransform: 'uppercase',
    fontSize: '14px',
    opactiy: 1,
    letterSpacing: 0
  },
  shadowBox: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden'
  }
}
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      shadow: []
    };
  }
  handleOpen(event) {
    let dom = findDOMNode(this.refs.button);
    let shadow = {
      key: this.state.shadow.length,
      event: {
        clientX: event.nativeEvent.clientX,
        clientY: event.nativeEvent.clientY,
      },
      target: {
        offsetWidth: dom.offsetWidth,
        offsetHeight: dom.offsetHeight,
        offsetTop: dom.offsetTop,
        offsetLeft: dom.offsetLeft,
      }
    };
    this.setState({
      shadow: this.state.shadow.concat(shadow)
    });
  }
  render() {
    let shadowList = this.state.shadow.map(function(shadow) {
      return <Shadow {...shadow} type="click"></Shadow>;
    });
    return (
      <div style={style.box}>
        <button style={style.button} onClick={this.handleOpen.bind(this)} ref='button'>
          <div onClick={(event) =>{
            window.event.cancelBubble = true;
/*            event.preventDefault();
            event.stopPropagation();*/
          }}>
            <span style={style.shadowBox} ref="shadow">
              {shadowList}
            </span>
            <div style={style.fontBox}>
              <span style={style.fontStyle}>
                {this.props.children}
              </span>
            </div>
          </div>
        </button>
      </div>
    )
  }
}

export default Button