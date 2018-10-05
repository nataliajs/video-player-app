import { WAITING, LOADING, ERROR, SUCCESS } from '../utils/network-states'
import * as types from '../actions/action-types'

const initialState = {
  networkState: WAITING,
  networkError: null,
  duration: 0,
  currentTime: 0,
  isPlaying: false,
  isMute: false,
  isCurrentTimeUpdated: false
};

export default function(state = initialState, action){
  switch (action.type){
    case types.GET_PLAYER_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.currentTime,
      }

    case types.GET_PLAYER_DURATION:
      return {
        ...state,
        duration: action.duration,
      }

    case types.GET_PLAYER_SUCCESS:
      return {
        ...state,
        networkError: null,
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
    
    case types.SET_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.isPlaying,
      }

    case types.SET_MUTE:
      return {
        ...state,
        isMute: action.isMute,
      }

    // we control time updates that come from input events
    case types.SET_IS_CURRENT_TIME_UPDATED:
      return {
        ...state,
        isCurrentTimeUpdated: action.isCurrentTimeUpdated,
      }

    case types.RESET_PLAYER:
      return initialState

    default:
      return state 
  }
}