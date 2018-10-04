import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { movieProps } from "utils/reused-proptypes"


class MoviesList extends React.Component {
  render() {
    // iterate through movies list to render buttons-links
    const moviesList = this.props.movies.map((movie) =>
      <li key={movie.id} className="Movies-list__item">
        <Link to={`/movie/${movie.id}`}>
          {movie.name}
        </Link>
      </li>
    );

    return(
        <div className="Movies">
          <ul className="Movies-list">
            { moviesList }
          </ul>
        </div>
    )
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieProps)
}
MoviesList.defaultProps = {
  movies: []
}
export default MoviesList
