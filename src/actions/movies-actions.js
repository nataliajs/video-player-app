import * as types from './action-types'

function getMoviesSuccess(Movies) {
  return {
    type: types.GET_MOVIES_SUCCESS,
    Movies,
  }
}

function getMoviesError(error) {
  return {
    type: types.GET_MOVIES_ERROR,
    error,
  }
}

function getMoviesLoading() {
  return {
    type: types.GET_MOVIES_LOADING,
  }
}

export function getMovies() {
  return dispatch => {
    dispatch(getMoviesLoading())
    
  }
}