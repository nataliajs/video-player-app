import * as types from "./action-types"
import * as queries from "../queries"

// actions to get a list of movies
function getMoviesSuccess(movies) {
  return {
    type: types.GET_MOVIES_SUCCESS,
    movies
  }
}

function getMoviesError(error) {
  return {
    type: types.GET_MOVIES_ERROR,
    error
  }
}

function getMoviesLoading() {
  return {
    type: types.GET_MOVIES_LOADING,
  }
}

// actions to get a movie by id
function getMovieSuccess(movie) {
  return {
    type: types.GET_MOVIE_SUCCESS,
    movie
  }
}

function getMovieError(error) {
  return {
    type: types.GET_MOVIE_ERROR,
    error
  }
}

function getMovieLoading() {
  return {
    type: types.GET_MOVIE_LOADING,
  }
}

export function getMovies() {
  return dispatch => {
    dispatch(getMoviesLoading())
    queries.getMovies()
      .then(response => {
        dispatch(getMoviesSuccess(response.data.movies))
      })
      .catch(error => {
        console.error(error)
        dispatch(getMoviesError(error))
      })
  }
}

export function getMovie(movieId) {
  return dispatch => {
    dispatch(getMovieLoading())
    queries.getMovie(movieId)
      .then(response => {
        dispatch(getMovieSuccess(response.data.movie))
      })
      .catch(error => {
        console.error(error)
        dispatch(getMovieError(error))
      })
  }
}