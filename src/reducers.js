import { WAITING, LOADING, ERROR, SUCCESS } from './utils/network-states'
import * as types from './actions/action-types'

const initialState = {
  moviesNetworkState: WAITING,
  moviesNetworkError: null,
  movies: [],
  currentMovie: {}
};

export default function(state = initialState, action){
  switch (action.type){
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        moviesNetworkState: SUCCESS,
      }

    case types.GET_MOVIES_ERROR:
      return {
        ...state,
        moviesNetworkState: ERROR,
        moviesNetworkError: action.error,
      }

    case types.GET_MOVIES_LOADING:
      return {
        ...state,
        moviesNetworkState: LOADING,
        moviesNetworkError: null,
      }

    default:
      return state 
  }
}