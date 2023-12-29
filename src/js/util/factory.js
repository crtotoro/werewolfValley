import { toKey } from "./helpers"

export function createPlayer(name) {

  return {
    name: name,
    key: toKey(name),
    status: 'enrolled',
    role: null,
    abilities: [],
    eliminatedBy: null,
    vote: false,
    isAttacked: false,
    isProtected: false,
    isFollowed: false,
    isResurrected: false,
    turnTaken: false
  }

}