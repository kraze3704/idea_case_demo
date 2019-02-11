import ActionTypes from './actionTypes';

import TestCategories from '../Models/TestData';

// action creators
export const addCategory = category => ({
    type: ActionTypes.ADD_CATEGORY,
    payload: {
        id: category.id,
        name: category.name,
        budget: category.budget,
    }
});

export const category_ADD_REQ = () => ({
    type: ActionTypes.CATEGORY_ADD_REQ,
});

export const category_ADD_OK = (categoryList) => ({
    type: ActionTypes.CATEGORY_ADD_OK,
    categoryList,
});

export const category_ADD_X = () => ({
    type: ActionTypes.CATEGORY_ADD_X,
});

export function Category_ALL_FETCH() {
    return async (dispatch, getState) => {
        dispatch(category_ADD_REQ());
        const categoryList = TestCategories();

        if(categoryList.length === 0) {
            dispatch(category_ADD_X());
            //console.log('ADD_X', categoryList);
        } else {
            dispatch(category_ADD_OK(categoryList));
            //console.log('ADD_OK', categoryList);
        }
    }
}