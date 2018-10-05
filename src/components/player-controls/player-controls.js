import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedoAlt } from '@fortawesome/free-solid-svg-icons'

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
        </div>
    )
  }
}

PlayerControls.propTypes = {
  handleTogglePlay: PropTypes.func,
  handleReload: PropTypes.func,
  handleClickProgressBar: PropTypes.func,
  percentage: PropTypes.number,
  isPlaying: PropTypes.bool
}

export default PlayerControls
