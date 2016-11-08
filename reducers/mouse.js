import { MOUSEDOWN } from '../constants'

const initialState = {
  action: []
}

export default function update(state = initialState, action) {
  switch(action.type) {
    case MOUSEDOWN:
      return {
        action: action
      }
  }
  return state
}