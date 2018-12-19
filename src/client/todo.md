Shape of the state:
State = {
    <!-- Trigger signin communicates with the server to sign in and authenticate -->
    signedIn: false,
    signUp: false,
    <!-- Variables that hold value in input fields -->
    <!-- usernameValue: '', -->
    <!-- passwordValue: '', -->
    <!-- Notice existence and message -->
    notice: false,
    noticeMessage: '',
    <!-- Used to create new entries -->
    term: '',
    definition: '',
    <!-- Boolean that determines whether entry form should be shown -->
    entryForm: false,
    searchValue: '',
    entries: [],
    entriesToRender: []
};

Action Types       

Redux Workflow

- constants/actionTypes.js - Action Types (constants)

- Smart components that need to map to state:

  - export default connect(mapStateToProps, mapDispatchToProps)
  - mapStateToProps = () => {return {assign local variables to variables from store}}

- actions/actions.js - Action Creators (functions that return objects)
- reducers/index.js
- Action Dispatchers