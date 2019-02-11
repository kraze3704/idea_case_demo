import { createStore, compose, applyMiddleware } from 'redux';
// imports from ./reducers/index.js
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const store = createStore(
    rootReducer(),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
// allows redux devtool extension

export default store;