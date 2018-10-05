import * as types from "./action-types"

// actions to manage player state
export function getPlayerCurrentTime(currentTime) {
  return {
    type: types.GET_PLAYER_CURRENT_TIME,
    currentTime
  }
}

export function getPlayerDuration(duration) {
  return {
    type: types.GET_PLAYER_DURATION,
    duration
  }
}

export function getPlayerSuccess() {
  return {
    type: types.GET_PLAYER_SUCCESS
  }
}

export function getPlayerError(error) {
  return {
    type: types.GET_PLAYER_ERROR,
    error
  }
}

export function getPlayerLoading() {
  return {
    type: types.GET_PLAYER_LOADING
  }
}

export function setIsPlaying(isPlaying) {
  return {
    type: types.SET_IS_PLAYING,
    isPlaying
  }
}

export function setMute(isMute) {
  return {
    type: types.SET_MUTE,
    isMute
  }
}
export function setIsCurrentTimeUpdated(isCurrentTimeUpdated) {  
  return {
    type: types.SET_IS_CURRENT_TIME_UPDATED,
    isCurrentTimeUpdated
  }
}

export function resetPlayer() {  
  return {
    type: types.RESET_PLAYER
  }
}
