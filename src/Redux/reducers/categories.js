import { ADD_CATEGORY } from "../actionTypes"

const INITIAL_STATE = {
    categoryList: [],
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_CATEGORY: {
            const category = action.payload;
            return  {
                ...state,
                categoryList: [...state.categoryList, category],
            }
        }
    default:
        return state;
    }
}