import React from "react"
import { connect } from "react-redux"
import store from "store"
import { getMovie } from "actions/movies-actions"

import { movieProps, movieDefaultProps } from "utils/reused-proptypes"
import { WAITING, LOADING } from "utils/network-states"

import Movie from "./movie"
import Loading from "../loading/loading"

class MovieContainer extends React.Component {

  componentWillMount(){
    store.dispatch(getMovie(this.props.match.params.movieId));
  }



  render() {
    return(
        <div>
          { this.props.networkState === WAITING || this.props.networkState === LOADING ?
            <Loading />
            : <Movie 
                movie={this.props.movie} />
          }
        </div>
    )
  }
}

MovieContainer.propTypes = {
  movie: movieProps
}

MovieContainer.defaultProps = {
  movie: movieDefaultProps
}

const mapStateToProps = function(_store) {
  return {
    movie: _store.moviesState.currentMovie,
    networkState: _store.moviesState.networkState
  }
}
export default connect(mapStateToProps)(MovieContainer)
