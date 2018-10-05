import React from "react"
import shaka from 'shaka-player'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import store from "store"
import { getPlayerCurrentTime, getPlayerDuration, getPlayerSuccess, getPlayerLoading, setIsCurrentTimeUpdated } from "actions/player-actions"
import { WAITING, LOADING } from "utils/network-states"

import Player from "./player"
import Loading from "../loading/loading"

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount(){    
    if(this.props.manifestUri===""){
      return;
    }
    store.dispatch(getPlayerLoading());

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

  componentDidUpdate(prevProps) {
    // if isPlaying value has changed and is true, play video
    if(this.props.isPlaying !== prevProps.isPlaying && this.props.isPlaying){
      this.videoRef.current.play();
    }
    // if isPlaying value has changed and is false, pause video
    if(this.props.isPlaying !== prevProps.isPlaying && !this.props.isPlaying){
      this.videoRef.current.pause();
    }
    // if current time has been updated through an input, we update currentTimeValue in video element
    // and clear isCurrentTimeUpdated in the store
    if(this.props.isCurrentTimeUpdated){
      this.videoRef.current.currentTime = this.props.currentTime;
      store.dispatch(setIsCurrentTimeUpdated(false));
    }
  }

  initPlayer() {
    // Create a Player instance.
    //const video = document.getElementById('video');
    const video = this.videoRef.current;
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
      store.dispatch(getPlayerSuccess());
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

  _loadedMetadata = () => {
    const video = this.videoRef.current;
    store.dispatch(getPlayerDuration(video.duration));
  }

  _handleTimeUpdate = () =>{
    const video = this.videoRef.current;
    store.dispatch(getPlayerCurrentTime(video.currentTime));
  }

  render() {
    return(
      <div>
        { this.props.networkState === WAITING || this.props.networkState === LOADING ?
            <Loading />: "" }
          <Player 
            ref={this.videoRef}
            onLoadedMetaData={this._loadedMetadata}
            onTimeUpdate={this._handleTimeUpdate}/>      
      </div>
    )
  }
}

PlayerContainer.propTypes = {
  networkState: PropTypes.string,
  src: PropTypes.string,
  currentTime: PropTypes.number,
  isPlaying: PropTypes.bool
}

PlayerContainer.defaultProps = {
  src: ""
}

const mapStateToProps = function(_store) {
  return {
    src: _store.moviesState.currentMovie.manifest,
    networkState: _store.playerState.networkState,
    isPlaying: _store.playerState.isPlaying,
    currentTime: _store.playerState.currentTime,
    isCurrentTimeUpdated: _store.playerState.isCurrentTimeUpdated,
  }
}
export default connect(mapStateToProps)(PlayerContainer)
