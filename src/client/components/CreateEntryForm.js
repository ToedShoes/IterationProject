import React, { Component } from 'react';

class CreateEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      definition: '',
    };
        // Prevents default page refresh behavior
    // Sends a post request with text from inputs
    // Receives an object with the post that was sent
    // Closes create entry modal
    this.handleCreateSubmit = (event) => {
      event.preventDefault();
      fetch("http://localhost:8080/addentry", {
        method: "POST",
        body: JSON.stringify({
          term: this.state.term,
          definition: this.state.definition,
          createdBy: this.props.user,
          upvotes: 0,
          downvotes: 0,
          tags: []
        }),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
        .then(res => {
          let arr = JSON.parse(JSON.stringify(this.state.entries))
          // let renderArr = JSON.parse(JSON.stringify(this.state.entriesToRender))
          arr.push(res)
          this.setState({
            entries: arr,
            term: '',
            definition: '',
            entryForm: false
          })
          this.closeCreateEntry;
        })
        .catch(err => console.log("Posting new entry Error: ", err))
    }

  }

  render() {
    return (
      <form onSubmit={this.handleCreateSubmit}>
        <button onClick={this.props.closeCreateEntry} type="button">X</button>
        <label>
          Entry term:
          <input type="text" value={this.props.term} onChange={this.props.handleTermChange} />
        </label>
        <label>
          Definition:
          <textarea name="definition" rows="1" cols="50" valugit e={this.props.definition} onChange={this.props.handleDefinitionChange}></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CreateEntryForm;