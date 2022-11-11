import {
  GET_DIALERS,
  ADD_DIALER,
  GET_DIALERS_SUCCESS,
  DELETE_DIALER,
  DELETE_DIALER_SUCCESS,
  UPDATE_DIALER,
  ADD_DIALER_SUCCESS,
  GET_ONE_DIALER,
  GET_ONE_DIALER_SUCCESS,
  UPDATE_DIALER_SUCCESS,
} from "./actionTypes";

const initialState = {
  dialerData: [],
  deleteDialerSuccess: false,
  addDialerSuccess: false,
  dialerDetails: [],
};

const dialer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIALERS:
      state = {
        ...state,
      };
      break;
    case ADD_DIALER:
      state = {
        ...state,
      };
      break;
    case UPDATE_DIALER:
      state = {
        ...state,
      };
      break;
    case DELETE_DIALER:
      state = {
        ...state,
      };
      break;
    case DELETE_DIALER_SUCCESS:
      state = {
        ...state,
        deleteDialerSuccess: action.payload,
      };
      break;
    case GET_ONE_DIALER:
      state = {
        ...state,
      };
      break;
    case GET_ONE_DIALER_SUCCESS:
      state = {
        ...state,
        dialerDetails: action.payload,
      };
      break;
    case ADD_DIALER_SUCCESS:
      state = {
        ...state,
        addDialerSuccess: action.payload,
      };
      break;
    case UPDATE_DIALER_SUCCESS:
      state = {
        ...state,
        addDialerSuccess: action.payload,
      };
      break;
    case GET_DIALERS_SUCCESS:
      state = {
        ...state,
        dialerData: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default dialer;
