import React, { Component } from 'react';



class EntryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.signedIn === true) {
      return (
        <article>
          <h3>{this.props.entry.term}</h3>
          <p>{this.props.entry.defintion}</p>
          <ul>
            <li>Created by: {this.props.entry.createdBy}</li>
            <p>Upvote: </p><button onClick={this.props.handleUpvote} id={this.props.entry._id} > {this.props.entry.upvotes}</button>
            <p>Downvote: </p><button onClick={this.props.handleDownvote} id={this.props.entry._id} >{this.props.entry.downvotes}</button>
          </ul>
        </article>
      )
    }
    else {
      return (
        <article>
          <h3>{this.props.entry.term}</h3>
          <p>{this.props.entry.defintion}</p>
          <ul>
            <li>Created by: {this.props.entry.createdBy}</li>

          </ul>
        </article>
      )
    }
  }
}

export default EntryItem;