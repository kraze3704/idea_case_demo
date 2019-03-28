import ActionTypes from "../actionTypes"

const INITIAL_STATE = {
    categoryList: [],
    isLoading: false,
    // flag to identify if the data is being loaded
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {

        /*
         * old addCategory
        case ActionTypes.ADD_CATEGORY: {
            const category = action.payload;
            return  {
                ...state,
                categoryList: [...state.categoryList, category],
            }
        }
        */

        case ActionTypes.CATEGORY_DEL_REQ: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case ActionTypes.CATEGORY_DEL_OK: {
            return {
                ...state,
            //    categoryList: state.categoryList.filter(item => item.id !== action.categoryId),
                isLoading: false,
            }
        }
        case ActionTypes.CATEGORY_DEL_X: {
            return{
                ...state,
                isLoading: false,
            }
        }

        case ActionTypes.CATEGORY_ADD_REQ: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case ActionTypes.CATEGORY_ADD_OK: {
            return {
                ...state,
            //    categoryList: [...state.categoryList, action.category ],
                isLoading: false,
            }
        }
        case ActionTypes.CATEGORY_ADD_X: {
            return {
                ...state,
                isLoading: false,
            }
        }

        case ActionTypes.CATEGORY_ALL_REQ: {
            return {
                ...state,
                isLoading: true,
            }
            // set loading flag to true
        }
        // response for a successful request
        case ActionTypes.CATEGORY_ALL_OK: {
            return {
                ...state,
                categoryList: action.categoryList,
                isLoading: false,
            }
            // 
        }
        // response for a fail request
        case ActionTypes.CATEGORY_ALL_X: {
            return {
                ...state,
                isLoading: false,
            }
            // add error flag maybe?
        }
        default:
            return state;
    }
}