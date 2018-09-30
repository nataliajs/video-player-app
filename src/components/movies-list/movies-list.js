import React from "react"
import { Link } from "react-router-dom"


class MoviesList extends React.Component {
  render() {
    // iterate through movies list to render buttons-links
    const moviesList = this.props.movies.map((movie) =>
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          {movie.name}
        </Link>
      </li>
    );

    return(
        <div>
          <ul>
            { moviesList }
          </ul>
        </div>
    )
  }
}

export default MoviesList
