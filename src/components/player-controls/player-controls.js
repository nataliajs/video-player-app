import React from "react"
import PropTypes from "prop-types"

class PlayerControls extends React.Component {
  _renderButton = (type)=>{
    return(
      <button type="button" name={type} onClick={this.props.handleInput} className="PlayerControls__btn">
        {type} 
      </button>
    )
  }
  render() {
    return(
        <div className="PlayerControls">
          { this._renderButton("play") }
          { this._renderButton("pause") }
        </div>
    )
  }
}

PlayerControls.propTypes = {
  handleInput: PropTypes.func
}

export default PlayerControls
