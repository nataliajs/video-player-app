import React from "react"
import PropTypes from "prop-types"

const Player = React.forwardRef((props, ref) => (
  <div className="Player">
    <video 
      ref={ref}
      width="640"
      poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
      onLoadedMetadata={props.onLoadedMetaData}
      onTimeUpdate={props.onTimeUpdate}
      //autoPlay
      /> 
    </div>
  )
)

Player.propTypes = {
  currentTime: PropTypes.number,
  onLoadedMetaData: PropTypes.func, // used to get duration
  onTimeUpdate: PropTypes.func, // used to get current time
  play: PropTypes.bool,
}

export default Player
