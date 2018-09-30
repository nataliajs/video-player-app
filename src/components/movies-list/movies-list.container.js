import React from "react"
import { connect } from "react-redux"
import store from "store"
import { getMovies } from "actions/movies-actions"

import MoviesList from "./movies-list"

class MoviesListContainer extends React.Component {
  componentWillMount(){
    store.dispatch(getMovies());
  }
  render() {
    return(
        <div>
          <MoviesList {...this.props}/>
        </div>
    )
  }
}

const mapStateToProps = function(_store) {
  return {
    movies: _store.movies
  }
}
export default connect(mapStateToProps)(MoviesListContainer)
