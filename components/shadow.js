import React, { Component } from 'react'

const style = {
  shadow: {,
    position: 'absolute',
    borderRadius: '50%',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  shadow_init: {
    opactiy: 0.25,
    transform: 'scale(0)',
    backgroundColor: '#FFFFFF'
  },
  shadow_click: {
    opactiy: 0,
    transform: 'scale(1)',
    backgroundColor: '#FFFFFF',
  }
}
class Shadow extends Component {
  getInitialState() {
    return {
      shadow_style: style.shadow_init,
      dom: '<div></div>'
    }
  }
  eventOrdinate(ev, type) {
    const event = {};
    switch(type){
      case 'click': 
      event.eventX = ev.clientX;
      event.eventY = ev.clientY;
      break;
      case 'touch':
      let touch = ev.changedTouches[0];
      event.eventX = Number(touch.pageX);
      event.eventY = Number(touch.pageY);
      break;
    }
    return event;
  }
  radius(ev, doc, type) {
    const setWidth = doc.offsetWidth;
    const setHeight = doc.offsetHeight;
    const setLeft = doc.offsetLeft;
    const setTop = doc.offsetTop;

    const tMax = setWidth > setHeight
    ? setWidth
    : setHeight;
    const event = eventOrdinate(ev, type);
    const mLeft = event.eventX - setLeft;
    const mTop = event.eventY - setTop;
    const mMax = setWidth > setHeight ? mLeft : mTop;
    const rWidth = mLeft > setWidth/2 
    ? mLeft 
    : setWidth - mLeft;
    const rHeight = mTop > setHeight/2 
    ? mTop 
    : setHeight-mTop;
    const radius = Math.sqrt( Math.pow( rWidth, 2 ) + Math.pow( rHeight, 2 ) );
    const rLeft = mLeft - radius;
    const rTop = mTop - radius;
    const diameter = radius * 2;
    return {
      top: rTop,
      left: rLeft,
      diameter: diameter
    }
  }
  click(event, parent, type){
    const radius = radius(event, parent, type);
    style.shadow_click.left = radius.left;
    style.shadow_click.top = radius.top;
    style.shadow_click.diameter = radius.diameter;
    this.setState({
      shadow_style: style.shadow_click,
      dom: '<div styles={[style.shadow, this.state.shadow_style]}></div>'
    });
    setTimeout(function () {
      this.setState({
        dom: ''
      })
    },2000);
  }
  render(){
    switch(this.props.type){
      case 'click':
        click(this.props.event, this.props.parent, this.props.type);
        break;
      default : break;
    }
    return ({this.state.dom})
  }
}
export default Shadow