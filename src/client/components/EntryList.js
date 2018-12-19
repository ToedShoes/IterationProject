import React, { Component } from 'react';
import EntryItem from './EntryItem';
import { throws } from 'assert';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  entriesToRender: state.entriesToRender,
  signedIn: state.signedIn
})

class EntryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let entries = [];
    if (this.props.entriesToRender.length > 0) {
      entries = this.props.entriesToRender.map((entry, index) => {
        return <EntryItem
          signedIn={this.props.signedIn}
          entry={entry}
          // key={`entry-item-${index}`}
          // term={entry.term}
          // definition={entry.definition}
          // createdBy={entry.createdBy}
          // upvotes={entry.upvotes}
          // downvotes={entry.downvotes}
          // _id={entry._id}
          // handleUpvote={this.props.handleUpvote}
          // handleDownvote={this.props.handleDownvote}
        />
      });
    }
    return (
      <div>
        {entries}
      </div>
    )
  }
}

export default connect(mapStateToProps)(EntryList);