import ActionTypes from './actionTypes';

export const addCategory = category => ({
    type: ActionTypes.ADD_CATEGORY,
    payload: {
        id: category.id,
        name: category.name,
        budget: category.budget,
    }
});