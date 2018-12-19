// Import entry action types
import * as types from '../constants/entryActionTypes';

// const ADD_UPVOTE = 'ADD_UPVOTE';
const addUpvote = () => ({
    type: types.ADD_UPVOTE
});

// const ADD_DOWNVOTE = 'ADD_DOWNVOTE';
const addDownvote = () => ({
    type: types.ADD_DOWNVOTE
});

// const SUBMIT_ENTRY = 'SUBMIT_ENTRY';
const submitEntry = () => ({
    type: types.SUBMIT_ENTRY
});

// const OPEN_CREATE_ENTRY_MODAL = 'OPEN_CREATE_ENTRY_MODAL';
const openCreateEntryModal = () => ({
    type: types.OPEN_CREATE_ENTRY_MODAL
});

// const CLOSE_CREATE_ENTRY_MODAL = 'CLOSE_CREATE_ENTRY_MODAL';
const closeCreateEntryModal = () => ({
    type: types.CLOSE_CREATE_ENTRY_MODAL
});

const updateEntries = (entries) => ({
    type: types.UPDATE_ENTRIES,
    payload: {entries}
});

const filterSearchOnInput = (value) => ({
    type: types.FILTER_SEARCH_ON_INPUT,
    payload: {value}
});

const showAllEntries = () => ({
    type: types.SHOW_ALL_ENTRIES
});

const requestEntries = () => ({
    type: types.REQUEST_ENTRIES
});

const receiveEntries = (entries) => ({
    type: types.RECEIEVE_ENTRIES,
    payload: {
        entries,
        receievedAt: Date.now()
    }
});

const invalidateEntries = () => ({
    type: types.INVALIDATE_ENTRIES
});

const createEntrySuccess = (entrydata) => ({
    type: types.ADD_ENTRY,
    payload: {entrydata}
});

const fetchEntries = function() {
    return dispatch => {
        dispatch(requestEntries());
        return fetch("http://localhost:8080/")
            .then((res) => { return res.json(); },
            (err) => { console.log('An error occurred.', err) })
            .then((json) => { dispatch(receiveEntries(json)); });
        }
};

const shouldGetEntries = function(state) {
    const fetching = state.entryReducers.isFetching;
    if(fetching) {
        return false;
    } else {
        return true
    }
};

const getEntriesIfNeeded = function() {
    return (dispatch, getState) => {
        if(shouldGetEntries(getState())) {
            return dispatch(fetchEntries());
        } else {
            return Promise.resolve();
        }
    };
};

const createEntry = function(entryToAdd) {
    return dispatch => {
        return fetch("http://localhost:8080/", {
            method: "POST",
            body: {
              term: entryToAdd.term,
              definition: entryToAdd.definition,
              createdBy: entryToAdd.user,
              upvotes: 0,
              downvotes: 0,
              tags: []
            },
            headers: {
              "Content-type": "application/json"
            }
          })
          .then((res) => { dispatch(createEntrySuccess(response.data)); },
            (err) => { console.log('An error occurred.', err) })
    }
};

export { addUpvote, 
        addDownvote,
        submitEntry,
        openCreateEntryModal,
        closeCreateEntryModal,
        updateEntries,
        filterSearchOnInput,
        requestEntires,
        receiveEntries,
        invalidateEntries,
        getEntriesIfNeeded,
        createEntry
    };