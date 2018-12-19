import React, { Component } from 'react';
import { Form, Text, withFormApi, withFormState } from "informed";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  signedInUser: state.userReducers.signedInUser
});

class CreateEntryForm extends Component {
  constructor(props) {
    super(props);
  }

  handleCreateSubmit(values) {
    event.preventDefault();
    fetch("http://localhost:8080/addentry", {
      method: "POST",
      body: JSON.stringify({
        term: values.term,
        definition: values.definition,
        createdBy: this.props.signedInUser,
        upvotes: 0,
        downvotes: 0,
        tags: []
      }),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json())
      .then(res => {
        // let arr = JSON.parse(JSON.stringify(this.state.entries))
        // // let renderArr = JSON.parse(JSON.stringify(this.state.entriesToRender))
        // arr.push(res)
        // this.setState({
        //   entries: arr,
        //   term: '',
        //   definition: '',
        //   entryForm: false
        // })
        // this.closeCreateEntry;
        console.log(res);
      })
      .catch(err => console.log("Posting new entry Error: ", err))
  }

  render() {
    return (
      // <form onSubmit={this.handleCreateSubmit}>
      //   <button onClick={this.props.closeCreateEntry} type="button">X</button>
      //   <label>
      //     Entry term:
      //     <input type="text" value={this.props.term} onChange={this.props.handleTermChange} />
      //   </label>
      //   <label>
      //     Definition:
      //     <textarea name="definition" rows="1" cols="50" valugit e={this.props.definition} onChange={this.props.handleDefinitionChange}></textarea>
      //   </label>
      //   <input type="submit" value="Submit" />
      // </form>
      <Form id="createEntry"
        onSubmit={values => {
          this.handleCreateSubmit(values);
        }}>
        {/* {({ formApi }) => ( */}
          <div>
            <label htmlFor="basic-name">Term:</label>
            <Text field="term" />
            <label htmlFor="basic-name">Definition:</label>
            <Text field="definition" type="input" />
            <button type="submit">Create Entry</button>
          </div>
        {/* )} */}
      </Form>
    );
  }
}

export default connect(mapStateToProps)(CreateEntryForm);