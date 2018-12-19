// import user action types
import * as types from '../constants/userActionTypes';

// Logout function sets signedIN property in state to false
// this.logout = () => {
const logOut = () => ({
    type: types.LOG_OUT
})

// Event listener for close button on modal:
// sets signUp propety in state to false
const closeSignupModal = () => ({
    type: types.CLOSE_SIGNUP_MODAL
})

// const SIGN_UP = 'SIGN_UP';
const openSignupModal = () => {
    console.log('Open signup modal action creator');
    return {type: types.OPEN_SIGNUP_MODAL}
}


// const SIGN_IN = 'SIGN_IN';
const signIn = () => ({
    type: types.SIGN_IN
})

export {logOut, closeSignupModal, openSignupModal, signIn};