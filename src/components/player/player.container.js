import React from "react"
import shaka from 'shaka-player'
import PropTypes from "prop-types"

import Player from "./player"

class PlayerContainer extends React.Component {

  componentDidMount(){    
    if(this.props.manifestUri===""){
      return;
    }
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      // Everything looks good!
      this.initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      console.error('Browser not supported!');
    }
  }

  initPlayer() {
    // Create a Player instance.
    const video = document.getElementById('video');
    const player = new shaka.Player(video);
  
    // Attach player to the window to make it easy to access in the JS console.
    window.player = player;
  
    // Listen for error events.
    player.addEventListener('error', this.onErrorEvent);

    const manifestUri = this.props.src;    
    // Try to load a manifest.
    // This is an asynchronous process.
    player.load(manifestUri).then(function() {
      // This runs if the asynchronous load is successful.
      console.log('The video has now been loaded!');      
    }).catch(this.onError);  // onError is executed if the asynchronous load fails.

    video.addEventListener('timeupdate', this._handleTimeUpdate);
  }

  onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }
  
  onError(error) {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
  }

  _loadedMetadata = () => {
    const video = document.getElementById('video');
    console.log("duration", video.duration);
  }

  _handleTimeUpdate = () =>{
    const video = document.getElementById('video');
    console.log("currentTime", video.currentTime);
  }

  _handleInput = event =>{
    const video = document.getElementById('video');
    switch(event.target.name){
      case "play":
        video.play();
        break;
      case "pause":
        video.pause();
        break;
    }
  }

  render() {
    return(
      <div>
        <Player 
          onLoadedMetaData={this._loadedMetadata}
          handleInput={this._handleInput}
          handlePlay={this._handlePlay} 
          handlePause={this._handlePause} 
          onTimeUpdate={this.handleTimeUpdate}/>
      </div>
    )
  }
}

PlayerContainer.propTypes = {
  src: PropTypes.string,
  /*currentTime: PropTypes.number,
  onLoadedMetaData: PropTypes.func, // used to get duration
  onTimeUpdate: PropTypes.func, // used to get current time
  play: PropTypes.bool,*/
}

PlayerContainer.defaultProps = {
  src: ""
}

export default PlayerContainer
