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
    if (this.props.entriesToRender && this.props.entriesToRender.length > 0) {
      entries = this.props.entriesToRender.map((entry, index) => {
        return <EntryItem
          signedIn={this.props.signedIn}
          entry={entry}
          key={index}
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