import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedoAlt, faVolumeOff, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

class PlayerControls extends React.Component {
  _renderPlayButton = ()=>{
    return(
      <button type="button" onClick={this.props.handleTogglePlay} className="PlayerControls__btn">
        {this.props.isPlaying? 
          <FontAwesomeIcon icon={faPause} />
          :<FontAwesomeIcon icon={faPlay} />
        } 
      </button>
    )
  }

  _renderReloadButton = ()=>{
    return(
      <button type="button" onClick={this.props.handleReload} className="PlayerControls__btn">
        <FontAwesomeIcon icon={faRedoAlt} />
      </button>
    )
  }

  _renderMuteButton = ()=>{
    return(
      <button type="button" onClick={this.props.handleToggleMute} className="PlayerControls__btn">
          {this.props.isMute? 
          <FontAwesomeIcon icon={faVolumeUp} />
          :<FontAwesomeIcon icon={faVolumeOff} />
        } 
      </button>
    )
  }

  _renderProgressBar = ()=>{
    return(
      <div id="video-progress-bar" onClick={this.props.handleClickProgressBar} className="PlayerControls__progress-bar">
        <div className="PlayerControls__progress-bar__fill" style={{ width: `${this.props.percentage}%` }} />
      </div>
    )
  }
  handleClick = e =>{
    console.log("event", e.pageX);
  }

  render() {
    return(
        <div className="PlayerControls">
          { this._renderProgressBar() }
          { this._renderPlayButton() } 
          { this._renderReloadButton() }   
          { this._renderMuteButton() }       
        </div>
    )
  }
}

PlayerControls.propTypes = {
  handleTogglePlay: PropTypes.func,
  handleReload: PropTypes.func,
  handleClickProgressBar: PropTypes.func,
  handleToggleMute: PropTypes.func,
  percentage: PropTypes.number,
  isPlaying: PropTypes.bool,
  isMute: PropTypes.bool,
}

PlayerControls.defaultProps = {
  isMute: false,
  isPlaying: false
}

export default PlayerControls
