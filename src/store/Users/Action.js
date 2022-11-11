import {
  ADD_USER,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_STATUS,
  UPDATE_USER_STATUS_SUCCESS,
  UPDATE_USER_SUCCESS,
  ADD_USER_SUCCESS
} from "./Types";

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const getUserSuccess = data => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

export const addUser = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const deleteUserSuccess = (bool) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: bool,
  };
};
export const updateUser = (data) => {
  return {
    type: UPDATE_USER,
    payload: data,
  };
};
export const updateUserSuccess = (data) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: data,
  };
};

export const updateUserStatusSuccess = (bool) => {
  return {
    type: UPDATE_USER_STATUS_SUCCESS,
    payload: bool,
  };
};

export const updateUserStatus = (data) => {
  return {
    type: UPDATE_USER_STATUS,
    payload: data,
  };
};
export const addUserSuccess = (bool) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: bool,
  };
};
