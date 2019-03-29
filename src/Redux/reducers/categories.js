import ActionTypes from "../actionTypes"

const INITIAL_STATE = {
    categoryList: [],
    isLoading: false,
    idsSelected: [],
    // flag to identify if the data is being loaded
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {

        case ActionTypes.CAT_FILTER_BY_BUDGET_LIMIT_REQ: {
            return {
                ...state,
                isLoading: true,
            }
        }

        case ActionTypes.CAT_FILTER_BY_BUDGET_LIMIT_OK: {
            return {
                ...state,
                idsSelected: action.idsSelected,
                isLoading: false,
            }
        }

        case ActionTypes.CAT_FILTER_BY_BUDGET_LIMIT_X: {
            return {
                ...state,
                isLoading: false,
            }
        }

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