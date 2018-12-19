import * as types from "../constants/inputActionTypes"

let initialState = {
  searchValue: ''
}

const inputReducers = (state=initialState, action) => {
  let entriesToRender;
  switch (action.type) {
    case types.SEND_NOTICE:
      return {...state, notice: true, noticeMessage:action.payload.message};
    case types.CLEAR_NOTICE:
      return {...state, notice: false, noticeMessage:''};
    default:
      return ({...state})
  }
};

// Bind username input field to property in state
// this.handleUsernameChange = (event) => {
// BIND_USERNAME;

// Bind password input field to property in state
// this.handlePasswordChange = (event) => {
// BIND_PASSWORD;

// Binds definition change input to property in state
// this.handleDefinitionChange = (event) => {
// BIND_DEFINITION;

export default inputReducers;