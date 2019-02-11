import { combineReducers } from 'redux';
import categories from './categories';

// export default combineReducers ({ categories });

const rootReducer = () => (
    combineReducers({
        categories,
    })
);

export default rootReducer;