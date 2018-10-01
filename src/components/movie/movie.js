import React from "react"
import { movieProps } from "utils/reused-proptypes"

import PlayerContainer from "components/player/player.container"

class Movie extends React.Component {
  render() {
    return(
      <div className="Movie">
        <div className="Movie__title">{ this.props.movie.name }</div>
        <div className="Movie__player">
          <PlayerContainer manifestUri={ this.props.movie.manifest }/>
        </div>          
      </div>
    )
  }
}

Movie.propTypes = {
  movie: movieProps
}
export default Movie
