import React from "react"
import PropTypes from "prop-types"

class PlayerControls extends React.Component {
  _renderButton = (type)=>{
    return(
      <button type="button" onClick={this.props.handleTogglePlay} className="PlayerControls__btn">
        {this.props.play? "pause": "play"} 
      </button>
    )
  }
  _renderProgressBar = ()=>{
    return(
      <div className="PlayerControls__progress-bar">
        <div className="PlayerControls__progress-bar__fill" style={{ width: `${this.props.percentage}%` }} />
      </div>
    )
  }

  render() {
    return(
        <div className="PlayerControls">
          { this._renderButton("play") }
        </div>
    )
  }
}

PlayerControls.propTypes = {
  handleTogglePlay: PropTypes.func,
  percentage: PropTypes.number,
  play: PropTypes.bool
}

export default PlayerControls
