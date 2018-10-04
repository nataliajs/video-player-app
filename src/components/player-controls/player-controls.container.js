import React from "react"
import PropTypes from "prop-types"

import PlayerControls from "./player-controls"

class PlayerControlsContainer extends React.Component {
  render() {
    return(
        <div>
          <PlayerControls 
            {...this.props}
          />
        </div>
    )
  }
}

PlayerControlsContainer.propTypes = {
  handleInput: PropTypes.func
}

export default PlayerControlsContainer
