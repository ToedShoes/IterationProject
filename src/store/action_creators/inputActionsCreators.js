// import input action types
import * as types from '../constants/inputActionTypes';

// const FILTER_SEARCH_ON_INPUT = 'FILTER_SEARCH_ON_INPUT';
const filterSearchOnInput = (value) => ({
    type: types.FILTER_SEARCH_ON_INPUT,
    payload: {value}
})

const showAllEntries = () => ({
    type: types.SHOW_ALL_ENTRIES,
})

const sendNotice = (message) => ({
    type: types.SEND_NOTICE,
    payload: message
})

const clearNotice = () => ({
    type:types.CLEAR_NOTICE
})

export { filterSearchOnInput, showAllEntries, sendNotice, clearNotice };