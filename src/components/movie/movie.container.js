import React from "react"
import { connect } from "react-redux"
import store from "store"
import { getMovie } from "actions/movies-actions"
import { movieProps } from "utils/reused-proptypes"
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
            : <Movie {...this.props} />
          }
        </div>
    )
  }
}

MovieContainer.propTypes = {
  movie: movieProps
}

const mapStateToProps = function(_store) {
  return {
    movie: _store.currentMovie,
    networkState: _store.networkState
  }
}
export default connect(mapStateToProps)(MovieContainer)
