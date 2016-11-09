import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import Button from './button/button'

function Home({ number, increase, decrease }) {

  return (
    <div>
      Some state changes:
      {number},
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
      <Button width="200px" >你好</Button>
      <Button width="200px" >登入</Button>
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number}),
  { increase, decrease }
)(Home)