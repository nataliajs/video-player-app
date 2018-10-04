import { combineReducers } from 'redux'

import moviesReducer from './movies'
import playerReducer from './player'

// Combine Reducers
const reducers = combineReducers({
  moviesState: moviesReducer,
  playerState: playerReducer,
})

export default reducers