import ActionTypes from './actionTypes';

import TestCategories from '../Models/TestData';

/*
 * old addCategory
// action creators
export const addCategory = category => ({
    type: ActionTypes.ADD_CATEGORY,
    payload: {
        id: category.id,
        name: category.name,
        budget: category.budget,
    }
});
*/

// actions for requesting ADD category then returning response
export const category_ADD_REQ = () => ({
    type: ActionTypes.CATEGORY_ADD_REQ,
});

export const category_ADD_OK = (newCategoryItem) => ({
    type: ActionTypes.CATEGORY_ADD_OK,
    category: newCategoryItem,
});

export const category_ADD_X = () => ({
    type: ActionTypes.CATEGORY_ADD_X,
});

export function addCategory(category) {
    return async (dispatch, getState) => {
        dispatch(category_ADD_REQ());

        console.dir(category);

        if(!category.id || !category.name || !category.budget) {
            console.log("X");
        } else {
            dispatch(category_ADD_OK(category));
        }
    }
};


// actions for fetching all the category list from Redux
export const category_ALL_REQ = () => ({
    type: ActionTypes.CATEGORY_ALL_REQ,
});

export const category_ALL_OK = (categoryList) => ({
    type: ActionTypes.CATEGORY_ALL_OK,
    categoryList,
});

export const category_ALL_X = () => ({
    type: ActionTypes.CATEGORY_ALL_X,
});

export function Category_ALL_FETCH() {
    return async (dispatch, getState) => {
        dispatch(category_ALL_REQ());
        const categoryList = TestCategories();

        if(categoryList.length === 0) {
            dispatch(category_ALL_X());
            //console.log('ADD_X', categoryList);
        } else {
            dispatch(category_ALL_OK(categoryList));
            //console.log('ADD_OK', categoryList);
        }
    }
}