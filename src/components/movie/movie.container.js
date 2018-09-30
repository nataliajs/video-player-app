import React from "react"
import store from "store"
import { getMovie } from "actions/movies-actions"

import Movie from "./movie"

class MovieContainer extends React.Component {
  componentWillMount(){
    store.dispatch(getMovie(this.props.match.params.movieId));
  }

  render() {
    return(
        <div>
          <Movie movieId={this.props.match.params.movieId} />
        </div>
    )
  }
}

export default MovieContainer
