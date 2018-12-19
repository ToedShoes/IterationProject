import React, { Component } from 'react';
import SearchBar from './SearchBar';
import EntryList from './EntryList';
import SignUpModal from './SignUpModal';
import CreateEntry from './CreateEntry';
import { connect } from 'react-redux';
import { addUpvote, addDownvote, submitEntry, openCreateEntryModal, closeCreateEntryModal, updateEntries } from '../../store/action_creators/entryActionsCreators';


const mapStateToProps = (state) => ({
  signedIn: state.signedIn,
  signUp: state.signUp
})

const mapDispatchToProps = (dispatch) => ({
  updateEntries: entries => dispatch(updateEntries(entries))
})

class PageContent extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   term: '',
    //   definition: '',
    //   entryForm: false,
    //   searchValue: '',
    // }
  }

  componentDidMount() {
    fetch("http://localhost:8080/")
    .then(res => {
      return res.json();
    })
    .then(res => {
      if(res) {
        this.props.updateEntries(res)
        // this.setState({
        //   entries: res
        // });
        console.log(res);
      }
    }).catch(err => {
      console.log("Fetch error. Could not get entries.", err);
    });
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
        {/* <EntryList
          // entriesToRender={this.state.entriesToRender}
        /> */}
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContent);