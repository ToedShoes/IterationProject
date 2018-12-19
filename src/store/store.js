import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import all reducers here
import userReducers from '../store/reducers/userReducers';
import inputReducers from '../store/reducers/inputReducers';
import entryReducers from '../store/reducers/entryReducers';

const rootReducer = combineReducers({userReducers, inputReducers, entryReducers})

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

export default store;