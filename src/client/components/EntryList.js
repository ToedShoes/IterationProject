import React, { Component } from 'react';
import EntryItem from './EntryItem';
import { throws } from 'assert';
import { connect } from 'react-redux';
import { updateEntries, getEntriesIfNeeded } from '../../store/action_creators/entryActionsCreators';

const mapStateToProps = (state) => ({
  signedIn: state.userReducers.signedIn,
  entriesToRender: state.entryReducers.entriesToRender
});


class EntryList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getEntriesIfNeeded());
  }

  render() {
    let entries = [];
    console.log(this.props.entriesToRender);
    if (this.props.entriesToRender && this.props.entriesToRender.length > 0) {
      entries = this.props.entriesToRender.map((entry, index) => {
        return <EntryItem
          signedIn={this.props.signedIn}
          entry={entry}
          key={index}
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

    // console.log(this.props.entriesToRender);
    // let entries = this.props.entriesToRender.map((entry, index) => {
    //       return (<EntryItem 
    //         signedIn={this.props.signedIn}
    //         entry={entry}/>
    //       );
    // });
    return (
      <div>
        {entries}
      </div>
    )
  }
}

export default connect(mapStateToProps)(EntryList);