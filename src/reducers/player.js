import { WAITING, LOADING, ERROR, SUCCESS } from '../utils/network-states'
import * as types from '../actions/action-types'

const initialState = {
  networkState: WAITING,
  networkError: null,
  player: {},
  currentTime: 0
};

export default function(state = initialState, action){
  switch (action.type){
    case types.GET_PLAYER_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.currentTime,
        networkState: SUCCESS,
      }

    case types.GET_PLAYER_ERROR:
      return {
        ...state,
        networkState: ERROR,
        networkError: action.error,
      }

    case types.GET_PLAYER_LOADING:
      return {
        ...state,
        networkState: LOADING,
        networkError: null,
      }
    default:
      return state 
  }
}