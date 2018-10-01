import React from "react"

class Player extends React.Component {
  render() {
    return(
        <div className="Player">
          <video id="video"
           width="640"
           poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
           controls></video>
           {/*autoPlay*/}
        </div>
    )
  }
}

export default Player
