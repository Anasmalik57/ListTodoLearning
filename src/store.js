import { combineReducers, createStore } from 'redux';

// Reducer Imports
import todoReducer from './reducers/todoReducer';


const reducer = combineReducers({todo: todoReducer});

const store = createStore(reducer);


export default store;