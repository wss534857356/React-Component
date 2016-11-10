import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease, time } from '../actions/count'
import Button from './button/button'

function Home({ number, increase, decrease, time }) {

  return (
    <div>
      Some state changes:
      {number},
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
      <button onClick={() => time(1)}>Time</button>
      <Button width="200px" >你好</Button>
      <Button width="200px" onClick={() => time(1, 1000)} >登入</Button>
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number}),
  { increase, decrease, time }
)(Home)