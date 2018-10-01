import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { movieProps } from "utils/reused-proptypes"


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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieProps)
}
export default MoviesList
