import React from "react"
import { connect } from "react-redux"
import store from "store"
import PropTypes from 'prop-types'
import { getMovies } from "actions/movies-actions"
import { movieProps } from "utils/reused-proptypes"
import { WAITING, LOADING } from "utils/network-states"

import MoviesList from "./movies-list"
import Loading from "../loading/loading"

class MoviesListContainer extends React.Component {
  componentWillMount(){
    store.dispatch(getMovies());
  }
  render() {
    return(
        <div>
          { this.props.networkState === WAITING || this.props.networkState === LOADING ?
            <Loading />
            : <MoviesList {...this.props}/>
          }          
        </div>
    )
  }
}

MoviesListContainer.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
  networkState: PropTypes.string
}

const mapStateToProps = function(_store) {
  return {
    movies: _store.movies,
    networkState: _store.networkState
  }
}
export default connect(mapStateToProps)(MoviesListContainer)
