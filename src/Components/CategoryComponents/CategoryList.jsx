import React, { Component } from 'react';
// import fetchTestCategories from '../../Models/TestData';
import CategoryItem from './CategoryItem';

import { connect } from 'react-redux';

import { Category_ALL_FETCH } from '../../Redux/actions'

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
        let LIST = this.props.list;

        return (
            <div className="CategoryList">
                {/*
                    <ul>
                        {LIST.map(a => <li key={a.id}>`{a.name} :: {a.budget}`</li>)}
                    </ul>
*/}
                <ul>
                    {LIST && LIST.length
                        ? LIST.map(ITEM => <CategoryItem item={ITEM} />)
                        : `category list is empty!`}
                </ul>
            </div>
        );
    }
}

const mapState = REDUX_STORE => ({
    // list: REDUX_STORE.categories.categoryList,
    list: REDUX_STORE.categories.categoryList
})

const dispatchToProps = dispatch => ({
    TEST_INJECTION: () => {
        dispatch(Category_ALL_FETCH());
    },
});

export default connect(mapState, dispatchToProps)(CategoryList);