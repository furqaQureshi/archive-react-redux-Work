import {
  GET_SERVERS,
  GET_SERVERS_SUCCESS,
  ADD_SERVER,
  DELETE_SERVER,
  UPDATE_SERVER,
  DELETE_SERVER_SUCCESS,
  ADD_SERVER_SUCCESS,
  GET_ONE_SERVER_SUCCESS,
  GET_ONE_SERVER,
  UPDATE_SERVER_STATUS,
  UPDATE_SERVER_STATUS_SUCCESS
} from "./actionTypes"


export const getServerOne = data => {
  return {
    type: GET_ONE_SERVER,
    payload: data
  }
}

export const getServerOneSuccess = data => {
  return {
    type: GET_ONE_SERVER_SUCCESS,
    payload: data
  }
}

export const addServerSuccess = bool => {
  return {
    type: ADD_SERVER_SUCCESS,
    payload: bool,
  }
}

export const updateServerStatusSuccess = bool => {
  return {
    type: UPDATE_SERVER_STATUS_SUCCESS,
    payload: bool
  }
}

export const deletedServerSuccess = bool => {
  return {
    type: DELETE_SERVER_SUCCESS,
    payload: bool,
  }
}

export const getServers = () => {
  return {
    type: GET_SERVERS
  }
}

export const getServersSuccess = data => {
  return {
    type: GET_SERVERS_SUCCESS,
    payload: data
  }
}

export const addServer = (data) => {
  return {
    type: ADD_SERVER,
    payload: data
  }
}

export const updateServer = (data) => {
  return {
    type: UPDATE_SERVER,
    payload: data
  }
}

export const updateServerStatus = (data) => {
  return {
    type: UPDATE_SERVER_STATUS,
    payload: data
  }
}

export const deleteServer = (id) => {
  return {
    type: DELETE_SERVER,
    payload: id
  }
}
