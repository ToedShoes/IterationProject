import React, { Component } from 'react';
import NavFields from './components/NavFields';
import PageContent from './components/PageContent';
import NoticeMessage from './components/NoticeMessage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = store => {
  return {
    signedIn: store.signedIn,
    signUp: store.signUp
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      signUp: false,
      usernameValue: '',
      passwordValue: '',
      notice: false,
      noticeMessage: ''
    };
    // User Actions / Dispatch Functions
    // Bind username input field to property in state
    this.handleUsernameChange = (event) => {
      this.setState({ usernameValue: event.target.value });
    };
    // Bind password input field to property in state
    this.handlePasswordChange = (event) => {
      this.setState({ passwordValue: event.target.value })
    };
    // Logout function sets property in state to false
    this.logout = () => {
      this.setState({ signedIn: false });
    }
    // Event listener for close button on modal
    this.closeSignUpModal = () => {
      this.setState({ signUp: false });
    }
    // Event listener for setting sign up to true
    this.triggerSignUp = (event) => {
      event.preventDefault();
      this.setState({ signUp: true });
    }
    // Event listener for sign in. Sends a fetch request to post username and password
  }

  render() {
    return (
      <main>
        <NavFields 
          // triggerSignIn={this.triggerSignIn}
          // signedIn={this.state.signedIn}
          // triggerSignUp={this.triggerSignUp}
          // logout={this.logout}
          // usernameValue={this.state.usernameValue}
          // handleUsernameChange={this.handleUsernameChange}
          // passwordValue={this.state.passswordValue}
          // handlePasswordChange={this.handlePasswordChange}
        />
        {/* {this.state.notice && 
          <NoticeMessage
          noticeMessage={this.state.noticeMessage} />
        } */}
        <PageContent 
          // closeSignUpModal={this.closeSignUpModal} 
          // signUp={this.state.signUp} 
          // signedIn={this.state.signedIn} 
          // user={this.state.user}
        />
      </main>
    )
  };
}

export default connect(mapStateToProps)(App);