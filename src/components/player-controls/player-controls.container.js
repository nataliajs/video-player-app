import React from "react"
import PropTypes from "prop-types"
import { setIsPlaying, 
  setIsCurrentTimeUpdated, 
  getPlayerCurrentTime,
  setMute } from "actions/player-actions"
import store from "store"
import { connect } from "react-redux"
import { getPercentage } from "utils/helpers"

import PlayerControls from "./player-controls"

class PlayerControlsContainer extends React.Component {

  _handleTogglePlay = event =>{
    store.dispatch(setIsPlaying(!this.props.isPlaying));
  }

  _handleToggleMute = event => {
    store.dispatch(setMute(!this.props.isMute));
  }

  _handleReload = event =>{
    store.dispatch(getPlayerCurrentTime(0));
    store.dispatch(setIsCurrentTimeUpdated(true));
  }

  _handleClickProgressBar = event =>{
    const barElement = document.getElementById("video-progress-bar");
    const clickRelativePosition = event.pageX - barElement.offsetLeft;
    const playedRatio = clickRelativePosition / barElement.offsetWidth;
    const newTimePosition = parseFloat((playedRatio*this.props.duration).toFixed(2));
    store.dispatch(getPlayerCurrentTime(newTimePosition));
    store.dispatch(setIsCurrentTimeUpdated(true));
    store.dispatch(setIsPlaying(true));
  }

  render() {
    const playedPercentage = getPercentage(this.props.currentTime, this.props.duration);
    return(
        <div>
          <PlayerControls 
            handleTogglePlay={this._handleTogglePlay}
            handleReload={this._handleReload}
            handleClickProgressBar={this._handleClickProgressBar}
            handleToggleMute={this._handleToggleMute}
            isPlaying={this.props.isPlaying}
            isMute={this.props.isMute}
            percentage={playedPercentage}
          />
        </div>
    )
  }
}

PlayerControlsContainer.propTypes = {
  isPlaying: PropTypes.bool,
  isMute: PropTypes.bool,
}

PlayerControlsContainer.defaultProps = {
  isMute: false,
  isPlaying: false
}

const mapStateToProps = function(_store) {
  return {
    isPlaying: _store.playerState.isPlaying,
    isMute: _store.playerState.isMute,
    duration: _store.playerState.duration,
    currentTime: _store.playerState.currentTime,
  }
}
export default connect(mapStateToProps)(PlayerControlsContainer)
