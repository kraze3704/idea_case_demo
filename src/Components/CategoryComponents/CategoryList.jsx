import React, { Component } from 'react';
// import fetchTestCategories from '../../Models/TestData';
import CategoryItem from './CategoryItem';

import { connect } from 'react-redux';

import { Category_ALL_FETCH, deleteCategory } from '../../Redux/actions'

class CategoryList extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {list: []};
    }
    */


    componentDidMount() {
        /*
        this.setState(
            {list: fetchTestCategories(), }
        );
        */

        this.props.TEST_INJECTION();
    }

    render() {
        let LIST = this.props.categories.categoryList;
//        console.log(this.props.categories);

        return (
            <div className="CategoryList">
                {/*
                    <ul>
                        {LIST.map(a => <li key={a.id}>`{a.name} :: {a.budget}`</li>)}
                    </ul>
*/}
                <ul>
                    {LIST && LIST.length > 0
                        ? LIST.map((ITEM, index) => 
                        <li key={index}>
                            <CategoryItem item={ITEM} />
                            <button onClick={()=>this.props.deleteCategoryLocal(ITEM.id)}>delete</button>
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
    TEST_INJECTION: () => {
        dispatch(Category_ALL_FETCH());
    },
    deleteCategoryLocal: id => {
        dispatch(deleteCategory(id));
    }
});

export default connect(mapState, dispatchToProps)(CategoryList);