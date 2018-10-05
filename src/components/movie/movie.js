import React from "react"
import { movieProps, movieDefaultProps } from "utils/reused-proptypes"

import PlayerContainer from "components/player/player.container"
import PlayerControlsContainer from "components/player-controls/player-controls.container"

class Movie extends React.Component {
  render() {
    return(
      <div className="Movie">
        <div className="Movie__title">{ this.props.movie.name }</div>
        <div className="Movie__player">
          <PlayerContainer />
          <PlayerControlsContainer
            />
        </div>          
      </div>
    )
  }
}

Movie.propTypes = {
  movie: movieProps
}

Movie.defaultProps = {
  movie: movieDefaultProps
}

export default Movie
