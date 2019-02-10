import { ADD_CATEGORY } from './actionTypes';

export const addCategory = category => ({
    type: ADD_CATEGORY,
    payload: {
        id: category.id,
        name: category.name,
        budget: category.budget,
    }
});