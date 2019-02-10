import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import CategoryList from './Components/CategoryComponents/CategoryList';
import Categories from './Views/CategoryViews/Categories';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './Redux/store'

const ROOT_ELEMENT = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Categories />
    </Provider>
    , ROOT_ELEMENT
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();