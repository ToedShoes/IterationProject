import React, { Component } from "react";
import { Form, Text, withFormAPI, withFormState } from "informed";
import { connect } from "react-redux";

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  closeSignUpModal: () => {
    dispatch(closeSignUpModal());
  },
  sendNotice: (message) => {
    dispatch(sendNotice(message));
  },
  clearNotice: () => {
    dispatch(clearNotice());
  }
});

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   usernameValue: '',
    //   passwordValue: '',
    //   notice: false,
    //   noticeMessage: ''
    // };
    // this.handleUsernameChange = (event) => {
    //   this.setState({ usernameValue: event.target.value });
    // };
    // this.handlePasswordChange = (event) => {
    //   this.setState({ passwordValue: event.target.value });
    // };
    this.signupHandler = values => {      
      fetch("http://localhost:8080/signup", {
        method: "POST",
        body: {
          username: values.username,
          password: values.password
        },
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res.userAlready === true) {
            this.props.sendNotice('User already exists. Try a different username.')
            // this.state({
            //   notice: true,
            //   noticeMessage: 'User already exists. Try a different username.'
            // });
            console.log("Signup failed");
          } else {
            this.props.clearNotice();
            // this.setState({
            //   notice: false,
            //   noticeMessage: ''
            // });
            // this.props.closeSignUpModal()
            console.log("Sign up succeeded!");
          }
        })
        .catch(err => console.log("error with signUP: ", err));
    };
  }
  render() {
    return (
      <section>
        <button onClick={this.props.closeSignUpModal}>X</button>
        <Form
          onSubmit={values => this.signupHandler(values)}>
          {({formAPI}) => (
            <div>
            <label htmlFor="basic-name">Enter username:</label>
            <Text field="username" />
            <label htmlFor="basic-name">Enter password:</label>
            <Text field="password" type="password" />
            <button type="submit">Sign Up</button>
          </div>
          )}
        </Form>

        {/* <input
          // value={this.state.usernameValue}
          // onChange={this.handleUsernameChange}
          id="usernameInput"
          type="text"
          name="username"
          placeholder="Enter desired username..."
        />
        <input
          // value={this.state.passwordValue}
          // onChange={this.handlePasswordChange}
          id="passwordInput"
          type="password"
          name="password"
          placeholder="Enter password..."
        /> */}
        {/* <button onClick={this.handleSignup} id="signUpButton">
          Sign Up
        </button> */}
        {/* {this.state.notice && 
          <NoticeMessage noticeMessage={this.state.noticeMessage} />
        } */}
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
