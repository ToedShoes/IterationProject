import React, { Component } from 'react';
import SearchBar from './SearchBar';
import EntryList from './EntryList';
import SignUpModal from './SignUpModal';
import CreateEntry from './CreateEntry';
import { connect } from 'react-redux';
import { addUpvote, addDownvote, submitEntry, openCreateEntryModal, closeCreateEntryModal, updateEntries } from '../../store/action_creators/entryActionsCreators';


const mapStateToProps = (state) => ({
  signedIn: state.signedIn,
  signUp: state.signUp,
  entriesToRender: state.entriesToRender
});

class PageContent extends Component {
  constructor(props) {
    super(props);
    // this.state = {
      // entryList: []
    //   term: '',
    //   definition: '',
    //   entryForm: false,
    //   searchValue: '',
    // };
  }

  render() {
    if (this.props.signUp) {
      return (
        <section>
          <h1>Urban Developtionary</h1>
          <SignUpModal
            // closeSignUpModal={this.props.closeSignUpModal}
          />
          <SearchBar
            // searchValue={this.state.searchValue}
            // handleSearchChange={this.handleSearchChange}
            // handleAllEntries={this.handleAllEntries}
          />
          {/* <EntryList
            // entriesToRender={this.state.entriesToRender}
          /> */}
        </section>
      )
    } else if (this.props.signedIn) {
      return (
        <section>
          <h1>Urban Developtionary</h1>
          <SearchBar
            // searchValue={this.state.searchValue}
            // handleSearchChange={this.handleSearchChange}
            // handleAllEntries={this.handleAllEntries}
          />
          <CreateEntry
            // user={this.state.user}
            // term={this.state.term}
            // definition={this.state.definition}
            // createEntry={this.createEntry}
            // closeCreateEntry={this.closeCreateEntry}
            // entryForm={this.state.entryForm} 
            // handleTermChange={this.handleTermChange} 
            // handleDefinitionChange={this.handleDefinitionChange} 
            // entries={this.state.entries}
          />
          <EntryList 
            // signedIn={this.props.signedIn} 
            // entriesToRender={this.state.entriesToRender} 
            // handleUpvote={this.handleUpvote} 
            // handleDownvote={this.handleDownvote} 
          />
        </section>
      )
    }
    return (
      <section>
        <h1>Urban Developtionary</h1>
        <SearchBar
          // searchValue={this.state.searchValue}
          // handleSearchChange={this.handleSearchChange}
          // handleAllEntries={this.handleAllEntries}
        />
        <CreateEntry
          // user={this.state.user}
          // term={this.state.term}
          // definition={this.state.definition}
          // createEntry={this.createEntry}
          // closeCreateEntry={this.closeCreateEntry}
          // entryForm={this.state.entryForm} 
          // handleTermChange={this.handleTermChange} 
          // handleDefinitionChange={this.handleDefinitionChange} 
          // entries={this.state.entries}
        />
        <EntryList
          entriesToRender={this.props.entriesToRender}
        />
      </section>
    )
  }
}

export default connect(mapStateToProps)(PageContent);