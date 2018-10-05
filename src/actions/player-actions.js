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

export function setPlay(play) {
  return {
    type: types.SET_PLAY,
    play
  }
}
