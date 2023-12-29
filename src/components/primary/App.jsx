import React from 'react'
import Header from './Header'
import Nav from './Nav.jsx'
import Panels from './Panels.jsx'

export const ACTIONS = {
  ADD_PLAYER: 'add_player',
}

export const newGame = {
  
}

export const gameReducer = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case ACTIONS.ADD_PLAYER: {
      // new player function
      return newState;
    }
    default: 
      return newState;
  }
}

export default function App() {
  const [gameState, dispatch] = useReducer(gameReducer, newGame)

  return (
    <div className='app'>
      <Header />
      <Nav />
      <Panels />
    </div>
  )
}
