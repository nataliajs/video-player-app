import React from "react"
import PropTypes from "prop-types"
import { setPlay } from "actions/player-actions"
import store from "store"
import { connect } from "react-redux"
import { getPercentage } from "utils/helpers"

import PlayerControls from "./player-controls"

class PlayerControlsContainer extends React.Component {

  _handleTogglePlay = event =>{
    store.dispatch(setPlay(!this.props.play));
  }

  render() {
    const playedPercentage = getPercentage(this.props.currentTime, this.props.duration);
    return(
        <div>
          <PlayerControls 
            handleTogglePlay={this._handleTogglePlay}
            play={this.props.play}
            percentage={playedPercentage}
          />
        </div>
    )
  }
}

PlayerControlsContainer.propTypes = {
  play: PropTypes.bool,
}

const mapStateToProps = function(_store) {
  return {
    play: _store.playerState.play,
    duration: _store.playerState.duration,
    currentTime: _store.playerState.currentTime,
  }
}
export default connect(mapStateToProps)(PlayerControlsContainer)
