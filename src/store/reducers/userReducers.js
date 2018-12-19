import * as types from "../constants/userActionTypes";

const initialState = {
  signedIn: false,
  signUp: false,
  signedInUser: ""
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    // Logout function sets signedIn property in state to false
    case types.LOG_OUT:
      return { 
        ...state, 
        signedIn: false,
        signedInUser: ""
      };

    // Event listener for setting sign up to true
    case types.OPEN_SIGNUP_MODAL:
      console.log("Open signup modal invoked");
      return { ...state, signUp: true };

    // Event listener for close button on modal:
    // sets signUp propety in state to false
    case types.CLOSE_SIGNUP_MODAL:
      return { ...state, signUp: false };

    // Event listener for sign in. Sends a fetch request to post username and password
    case types.SIGN_IN:
      return { 
        ...state, 
        signedIn: true,
        signedInUser: action.payload.signedInUser
      };

    // Return state unmodified
    default:
      return state;
  }
};

export default userReducers;