import { createStore } from 'redux';
// imports from ./reducers/index.js
import rootReducer from './reducers';


export default createStore(rootReducer);