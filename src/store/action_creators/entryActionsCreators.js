// Import entry action types
import * as types from '../constants/entryActionTypes';

// const ADD_UPVOTE = 'ADD_UPVOTE';
const addUpvote = () => ({
    type: types.ADD_UPVOTE
})

// const ADD_DOWNVOTE = 'ADD_DOWNVOTE';
const addDownvote = () => ({
    type: types.ADD_DOWNVOTE
})

// const SUBMIT_ENTRY = 'SUBMIT_ENTRY';
const submitEntry = () => ({
    type: types.SUBMIT_ENTRY
})

// const OPEN_CREATE_ENTRY_MODAL = 'OPEN_CREATE_ENTRY_MODAL';
const openCreateEntryModal = () => ({
    type: types.OPEN_CREATE_ENTRY_MODAL
})

// const CLOSE_CREATE_ENTRY_MODAL = 'CLOSE_CREATE_ENTRY_MODAL';
const closeCreateEntryModal = () => ({
    type: types.CLOSE_CREATE_ENTRY_MODAL
})

const updateEntries = (entries) => ({
    type: types.UPDATE_ENTRIES,
    payload: {entries}
})

const filterSearchOnInput = (value) => ({
    type: types.FILTER_SEARCH_ON_INPUT,
    payload: {value}
})

const showAllEntries = () => ({
    type: types.SHOW_ALL_ENTRIES
})

export { addUpvote, addDownvote, submitEntry, openCreateEntryModal, closeCreateEntryModal, updateEntries, filterSearchOnInput };