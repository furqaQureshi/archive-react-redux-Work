import {
  ADD_USER,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
} from "./Types";

const initialState = {
  users: [],
  deletedUserSuccess: false,
  addUserSuccess: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      state = {
        ...state,
      };
      break;
    case GET_USER_SUCCESS:
      state = {
        ...state,
        users: action.payload,
      };
      break;
    case ADD_USER:
      state = {
        ...state,
      };
      break;
    case DELETE_USER:
      state = {
        ...state,
      };
      break;
    case DELETE_USER_SUCCESS:
      state = {
        ...state,
        deletedUserSuccess: action.payload,
      };
      break;
    case UPDATE_USER:
      state = {
        ...state,
      };
      break;
    case UPDATE_USER_SUCCESS:
      state = {
        ...state,
        addUserSuccess: action.payload,
      };
      break;
    case ADD_USER_SUCCESS:
      state = {
        ...state,
        addUserSuccess: action.payload,
      };
      break;
    default:
      state = { ...state };
  }
  return state ;
};

export default reducer;
