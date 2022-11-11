import {
  GET_SERVERS,
  ADD_SERVER,
  GET_SERVERS_SUCCESS,
  DELETE_SERVER,
  UPDATE_SERVER,
  DELETE_SERVER_SUCCESS,
  ADD_SERVER_SUCCESS,
  GET_ONE_SERVER,
  GET_ONE_SERVER_SUCCESS,
  UPDATE_SERVER_SUCCESS,
  UPDATE_SERVER_STATUS,
  UPDATE_SERVER_STATUS_SUCCESS,
} from "./actionTypes";

const initialState = {
  serverData: [],
  deleteServerSuccess: false,
  addServerSuccess: false,
  serverDetails: [],
  updateServerStatusSuccess: false,
};

const server = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVERS:
      state = {
        ...state,
      };
      break;
    case ADD_SERVER:
      state = {
        ...state,
      };
      break;
    case UPDATE_SERVER:
      state = {
        ...state,
      };
      break;
    case DELETE_SERVER:
      state = {
        ...state,
      };
      break;
    case GET_ONE_SERVER:
      state = {
        ...state,
      };
      break;
    case GET_ONE_SERVER_SUCCESS:
      state = { 
        ...state,
        serverDetails: action.payload,
      };
      break;
    case DELETE_SERVER_SUCCESS:
      state = {
        ...state,
        deleteServerSuccess: action.payload,
      };
      break;
    case ADD_SERVER_SUCCESS:
      state = {
        ...state,
        addServerSuccess: action.payload,
      };
      break;
    case UPDATE_SERVER_SUCCESS:
      state = {
        ...state,
        addServerSuccess: action.payload,
      };
      break;
    case GET_SERVERS_SUCCESS:
      state = {
        ...state,
        serverData: action.payload,
      };
      break;
    case UPDATE_SERVER_STATUS:
      state = {
        ...state,
      };
      break;
    case UPDATE_SERVER_STATUS_SUCCESS:
      state = {
        ...state,
        updateServerStatusSuccess: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default server;
