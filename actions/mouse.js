import { MOUSEDOWN } from '../constants'

export function click(ev, dom) {
  return {
    type: MOUSEDOWN,
    event: ev,
    dom: dom
  }
}