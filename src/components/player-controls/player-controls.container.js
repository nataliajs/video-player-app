import React from "react"
import PropTypes from "prop-types"
import { setIsPlaying, setIsCurrentTimeUpdated, getPlayerCurrentTime } from "actions/player-actions"
import store from "store"
import { connect } from "react-redux"
import { getPercentage } from "utils/helpers"

import PlayerControls from "./player-controls"

class PlayerControlsContainer extends React.Component {

  _handleTogglePlay = event =>{
    store.dispatch(setIsPlaying(!this.props.isPlaying));
  }

  _handleReload = event =>{
    store.dispatch(getPlayerCurrentTime(0));
    store.dispatch(setIsCurrentTimeUpdated(true));
  }

  render() {
    const playedPercentage = getPercentage(this.props.currentTime, this.props.duration);
    return(
        <div>
          <PlayerControls 
            handleTogglePlay={this._handleTogglePlay}
            handleReload={this._handleReload}
            isPlaying={this.props.isPlaying}
            percentage={playedPercentage}
          />
        </div>
    )
  }
}

PlayerControlsContainer.propTypes = {
  isPlaying: PropTypes.bool,
}

const mapStateToProps = function(_store) {
  return {
    isPlaying: _store.playerState.isPlaying,
    duration: _store.playerState.duration,
    currentTime: _store.playerState.currentTime,
  }
}
export default connect(mapStateToProps)(PlayerControlsContainer)
