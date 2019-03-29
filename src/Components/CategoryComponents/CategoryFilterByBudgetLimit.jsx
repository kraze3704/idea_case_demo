import React, { Component } from 'react';
// import fetchTestCategories from '../../Models/TestData';
import CategoryItem from './CategoryItem';

import { connect } from 'react-redux';
import { CategoryFilterBudgetLimit, deleteCategory } from '../../Redux/actions'

const BUDGET_TEST = 100;

class CategoryFilterByBudgetLimit extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {list: []};
    }
    */

    componentDidMount() {
        this.props.CategoryFilterByBudgetLimitLocal(BUDGET_TEST);
    }

    render() {
        let LIST = this.props.categories.categoryList;
        let ID_SELECTED = this.props.categories.idsSelected;

        let CATEOGRY_FILTERED = [];
        for( let i = 0 ; i < ID_SELECTED.length ; i++ ){
            for( let j = 0 ; j < LIST.length ; j++){
                if(LIST[j].id === ID_SELECTED[i]) {
                    CATEOGRY_FILTERED.push(LIST[j]);
                    break;
                };
            };
        };

        return (
            <div className="ID_SELECTED">
                <h4>budget limit : {BUDGET_TEST}</h4>
                <ul>
                    {CATEOGRY_FILTERED && CATEOGRY_FILTERED.length > 0
                        ? CATEOGRY_FILTERED.map((ITEM, index) => 
                        <li key={index}>
                            <CategoryItem item={ITEM} />
                            <button onClick={()=>this.props.CategoryDeleteLocal(ITEM.id)}>delete</button>
                        </li>)
                        : `category list is empty!`}
                </ul>
            </div>
        );
    }
}

const mapState = REDUX_STORE => ({
    // list: REDUX_STORE.categories.categoryList,
    categories: REDUX_STORE.categories
})

const dispatchToProps = dispatch => ({
    CategoryFilterByBudgetLimitLocal: (limit) => {
        dispatch(CategoryFilterBudgetLimit(limit));
    },
    CategoryDeleteLocal: id => {
        dispatch(deleteCategory(id));
    }
});

export default connect(mapState, dispatchToProps)(CategoryFilterByBudgetLimit);