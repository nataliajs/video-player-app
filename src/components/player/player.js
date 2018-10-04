import React from "react"
import PropTypes from "prop-types"

import PlayerControlsContainer from "components/player-controls/player-controls.container"

class Player extends React.Component {
  render() {
    return(
        <div className="Player">
          <video 
            id="video"
            ref="video"
            width="640"
            poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
            loadedmetadata={this.props.onLoadedMetaData}
          />
            <PlayerControlsContainer 
              {...this.props}
          />
        </div>
    )
  }
}

Player.propTypes = {
  currentTime: PropTypes.number,
  onLoadedMetaData: PropTypes.func, // used to get duration
  onTimeUpdate: PropTypes.func, // used to get current time
  play: PropTypes.bool,
}

export default Player
