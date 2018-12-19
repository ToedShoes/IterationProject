import * as types from "../constants/entryActionTypes";

const initialState = {
  entries: [],
  entriesToRender: [],
  entryForm: false,
  searchValue: ''
};

const entryReducers = (state = initialState, action) => {
  let entriesCopy;
  let entriesToRender;
  let index;
  switch (action.type) {
    case types.ADD_UPVOTE:
      // Makes a copy of the entries in state
      // Finds index of the current entry
      // Increments upvotes on the entry
      // Sets state with the modified entries
      entriesCopy = JSON.parse(JSON.stringify(state.entries));
      index = entriesCopy.findIndex(entry => {
        console.log(entry);
        return entry._id == action.payload.id;
      });
      entriesCopy[index].upvotes = entriesCopy[index].upvotes + 1;
      return {
        ...state,
        entries: entriesCopy,
        entriestoRender: entriesCopy
      };
    case types.ADD_DOWNVOTE:
      entriesCopy = JSON.parse(JSON.stringify(state.entries));
      index = entriesCopy.findIndex(entry => {
        console.log(entry);
        return entry._id == action.payload.id;
      });
      entriesCopy[index].upvotes = entriesCopy[index].upvotes - 1;
      return {
        ...state,
        entries: entriesCopy,
        entriestoRender: entriesCopy
      };
    case types.OPEN_CREATE_ENTRY_MODAL:
      // Sets state property for entryForm to true
      // This opens up the create entry modal
      return {
        ...state,
        entryForm: true
      };
    case types.CLOSE_CREATE_ENTRY_MODAL:
      return {
        ...state,
        entryForm: false
      };
    case types.UPDATE_ENTRIES:
      console.log(action.payload);
      return {
        ...state,
        entriesToRender: action.payload.entries
      };
    case types.FILTER_SEARCH_ON_INPUT:
      // Binds search input change to property in state
      let searchValue = action.payload.value;
      let entriesCopy = JSON.parse(JSON.stringify(state.entries));
      entriesToRender = entriesCopy.filter(entry => {
        return entry.term.toLowerCase().includes(searchValue.toLowerCase());
      });
      return {
        ...state,
        entriesToRender,
        searchValue: searchValue
      };
    case types.SHOW_ALL_ENTRIES:
      entriesToRender = state.entries;
      return { ...state, entriesToRender };
    case types.REQUEST_ENTRIES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        error: null
      };
    case types.RECEIEVE_ENTRIES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        entriesToRender: action.payload.entries
      };
    case types.INVALIDATE_ENTRIES:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return { ...state };
  }
};

// Makes a copy of the entries in state
// Finds index of the current entry
// Increments upvotes on the entry
// Sets state with the modified entries
// this.handleUpvote = (event) => {
// ADD_UPVOTE;

// Makes a copy of the entries in state
// Finds index of the current entry
// Increments upvotes on the entry
// Sets state with the modified entries
// this.handleDownvote = (event) => {
// ADD_DOWNVOTE;

// Prevents default page refresh behavior
// Sends a post request with text from inputs
// Receives an object with the post that was sent
// Closes create entry modal
// this.handleCreateSubmit = (event) => {
// SUBMIT_ENTRY;

// Sets state property for entryForm to true
// This opens up the create entry modal
// this.createEntry = () => {
// OPEN_CREATE_ENTRY_MODAL;

// Handler to close the create entry modal
// this.closeCreateEntry = () => {
// CLOSE_CREATE_ENTRY_MODAL;

export default entryReducers;
