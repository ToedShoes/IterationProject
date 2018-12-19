import React, { Component } from "react";
import { connect } from "react-redux";
import { showAllEntries, sendNotice, clearNotice } from "../../store/action_creators/inputActionsCreators";
import { addUpvote, addDownvote, submitEntry, openCreateEntryModal, closeCreateEntryModal, updateEntries, filterSearchOnInput } from "../../store/action_creators/entryActionsCreators";

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  filterSearchOnInput: value => dispatch(filterSearchOnInput(value)),
  showAllEntries: () => dispatch(showAllEntries())
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          // value={this.props.searchValue}
          onChange={e => {
            this.props.filterSearchOnInput(e.target.value);
          }}
          type="text"
          placeholder="Search for term..."
        />
        <button
          type="button"
          onClick={() => {
            console.log("Search click is being invoked.");
            this.props.showAllEntries;
          }}
        >
          See All Entries
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
