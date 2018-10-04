import * as types from "./action-types"

// actions to manage player state
export function getPlayerCurrentTimeSuccess(currentTime) {
  return {
    type: types.GET_PLAYER_CURRENT_TIME,
    currentTime
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
    type: types.GET_PLAYER_LOADING,
  }
}
