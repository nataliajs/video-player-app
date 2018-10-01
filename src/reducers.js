import { WAITING, LOADING, ERROR, SUCCESS } from './utils/network-states'
import * as types from './actions/action-types'

const initialState = {
  networkState: WAITING,
  networkError: null,
  movies: [],
  currentMovie: {}
};

export default function(state = initialState, action){
  switch (action.type){
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        networkState: SUCCESS,
      }

    case types.GET_MOVIES_ERROR:
      return {
        ...state,
        networkState: ERROR,
        networkError: action.error,
      }

    case types.GET_MOVIES_LOADING:
      return {
        ...state,
        networkState: LOADING,
        networkError: null,
      }

      case types.GET_MOVIE_SUCCESS:
      return {
        ...state,
        currentMovie: action.movie,
        networkState: SUCCESS,
      }

    case types.GET_MOVIE_ERROR:
      return {
        ...state,
        networkState: ERROR,
        networkError: action.error,
      }

    case types.GET_MOVIE_LOADING:
      return {
        ...state,
        networkState: LOADING,
        networkError: null,
      }

    default:
      return state 
  }
}