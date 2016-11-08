import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import { mouse } from '../actions/count'
import Button from './button/button'

function Home({ number, action, increase, decrease, mouse }) {
  
  return (
    <div>
      Some state changes:
      {number},
      {action}
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
      <Button {...action} onClick={() => click(event, this)}>你好</Button>
      <button onClick={handleOpen}>Decrease</button>
    </div>
  )
}
function handleOpen(event) {
  console.log(event)//输出节点的className
  console.log(event.nativeEvent)
}
export default connect(
  state => ({ number: state.count.number, action: state.mouse.action}),
  { increase, decrease, mouse }
)(Home)