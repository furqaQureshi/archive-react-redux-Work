import { OLD_PASSWORD, PASSWORD_CHANGE_SUCCESS } from "./Types";

const initialState = {
  ChangePasswordData: [],
  ChangePasswordSuccess: false,
};

const Change = (state = initialState, action) => {
  switch (action.type) {
    case OLD_PASSWORD:
      state = {
        ...state,
      };
      break;
    case PASSWORD_CHANGE_SUCCESS:
      state = {
        ...state,
        ChangePasswordSuccess: action.payload,
      };
      break;
    default:
      state = { ...state };
  }
  return state;
};
export default Change;
