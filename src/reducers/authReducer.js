import { types } from "../types/types";

const initialStaste = {
  checking: true,
  //uid: null,
  //name: null
};

export const authReducer = (state = initialStaste, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };
    case types.authLogout:
      return {
        checking: false,
      };
    default:
      return state;
  }
};
