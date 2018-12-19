import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// import all reducers here
import userReducers from '../store/reducers/userReducers';
import inputReducers from '../store/reducers/inputReducers';
import entryReducers from '../store/reducers/entryReducers';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({userReducers, inputReducers, entryReducers})

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, loggerMiddleware),
        composeWithDevTools()
    )
);

export default store;