import {
    GET_DIALERS,
    GET_DIALERS_SUCCESS,
    ADD_DIALER,
    DELETE_DIALER,
    DELETE_DIALER_SUCCESS,
    UPDATE_DIALER,
    ADD_DIALER_SUCCESS,
    GET_ONE_DIALER,
    GET_ONE_DIALER_SUCCESS,
  } from "./actionTypes"


  export const getDialerOne = data => {
    return {
      type: GET_ONE_DIALER,
      payload: data
    }
  }

  export const getDialerOneSuccess = data => {
    return {
      type: GET_ONE_DIALER_SUCCESS,
      payload: data
    }
  }

  export const addDialerSuccess = bool => {

    return {
      type: ADD_DIALER_SUCCESS,
      payload: bool,
    }
  }

  export const deletedDialerSuccess = bool => {
    return {
      type: DELETE_DIALER_SUCCESS,
      payload: bool,
    }
  }

  export const getDialers = () => {
    return {
      type: GET_DIALERS
    }
  }
  
  export const getDialersSuccess = data => {
    return {
      type: GET_DIALERS_SUCCESS,
      payload: data
    }
  }
  
  export const addDialer = (data) => {
    return {
      type: ADD_DIALER,
      payload: data
    }
  }
  
  export const updateDialer = (data) => {
    return {
      type: UPDATE_DIALER,
      payload: data
    }
  }
  
  export const deleteDialer = (id) => {
    return {
      type: DELETE_DIALER,
      payload: id
    }
  }
