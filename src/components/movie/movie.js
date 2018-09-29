import React from "react"

class Movie extends React.Component {
  render() {
    return(
        <div>
          movie item {this.props.movieId}
        </div>
    )
  }
}

export default Movie
