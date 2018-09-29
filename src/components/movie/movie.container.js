import React from "react"

import Movie from "./movie"

class MovieContainer extends React.Component {
  render() {
    return(
        <div>
          <Movie movieId={this.props.match.params.movieId} />
        </div>
    )
  }
}

export default MovieContainer
