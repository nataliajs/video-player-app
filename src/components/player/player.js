import React from "react"
import PropTypes from "prop-types"

const Player = React.forwardRef((props, ref) => (
  <div className="Player">
    <video 
      className="Player__video"
      ref={ref}
      poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
      onLoadedMetadata={props.onLoadedMetaData}
      onTimeUpdate={props.onTimeUpdate}
      muted={props.isMute}
      /> 
    </div>
  )
)

Player.propTypes = {
  currentTime: PropTypes.number,
  onLoadedMetaData: PropTypes.func, // used to get duration
  onTimeUpdate: PropTypes.func, // used to get current time
  isPlaying: PropTypes.bool,
}

export default Player
