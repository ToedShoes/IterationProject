import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Text, withFormApi, withFormState } from "informed";
import {logOut, closeSignupModal, openSignupModal, signIn} from '../../store/action_creators/userActionCreators'

const mapStateToProps = state => ({
  signedIn: state.signedIn
});

const mapDispatchToProps = dispatch => ({
  openSignupModal: () => {dispatch(openSignupModal())},
  signIn: (username) => {dispatch(signIn(username))}
})

class NavFields extends Component {
  constructor(props) {
    super(props);
  }

  loginHandler(values) {
    fetch("http://localhost:8080/signin", {
      method: "POST",
      body: JSON.stringify({
        username: values.username,
        password: values.password
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log('Response object: ', res);
        this.props.signIn(res.user);
      })
      .catch(err => console.log("Error with signin: ", err));
  }

  render() {
    if (this.props.signedIn) {
      return (
        <button onClick={this.props.logout} id="logoutButton">
          Logout
        </button>
      );
    }
    return (
      <nav>
        <Form
          id="login"
          onSubmit={values => {
            this.loginHandler(values);
          }}
        >
          {({ formApi }) => (
            <div>
              <label htmlFor="basic-name">Enter username:</label>
              <Text field="username" />
              <label htmlFor="basic-name">Enter password:</label>
              <Text field="password" type="password" />
              <button type="submit">Log In</button>
            </div>
          )}
        </Form>
        {/* <input
          // value={this.props.usernameValue}
          // onChange={this.props.handleUsernameChange}
          id="usernameInput"
          type="text"
          name="username"
          placeholder="Enter username here..."
        />
        <input
          // value={this.props.passwordValue}
          // onChange={this.props.handlePasswordChange}
          id="passwordInput"
          type="password"
          name="password"
          placeholder="Password..."
        />
        <button onClick={this.props.triggerSignIn} id="loginButton">
          Login
        </button> */}
        <a onClick={this.props.openSignupModal} href="#">
          Sign Up
        </a>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavFields);