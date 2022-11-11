import { UPDATE_PROFILE, UPDATE_USER_PROFILE_SUCCESS } from "./Types";

const initialState = {
  userData: [],
  userProfileSuccess: false,
};
const View = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      state = {
        ...state
      };
      break;
    case UPDATE_USER_PROFILE_SUCCESS:
      state = {
        ...state,
        userProfileSuccess: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default View;
