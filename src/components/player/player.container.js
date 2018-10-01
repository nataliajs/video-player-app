import React from "react"
import shaka from 'shaka-player'

import Player from "./player"

class PlayerContainer extends React.Component {
  componentDidMount(){
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
    var video = document.getElementById('video');
    var player = new shaka.Player(video);
  
    // Attach player to the window to make it easy to access in the JS console.
    window.player = player;
  
    // Listen for error events.
    player.addEventListener('error', this.onErrorEvent);
  
    console.log(this.props.manifestUri);
    const manifestUri = this.props.manifestUri;
    //const manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
    // Try to load a manifest.
    // This is an asynchronous process.
    player.load(manifestUri).then(function() {
      // This runs if the asynchronous load is successful.
      console.log('The video has now been loaded!');
    }).catch(this.onError);  // onError is executed if the asynchronous load fails.
  }

  onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }
  
  onError(error) {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
  }

  render() {
    return(
      <div>
        <Player />
      </div>
    )
  }
}

export default PlayerContainer
