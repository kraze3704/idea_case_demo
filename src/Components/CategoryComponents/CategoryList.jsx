import React, { Component } from 'react';
// import fetchTestCategories from '../../Models/TestData';
import CategoryItem from './CategoryItem';

import { connect } from 'react-redux';

class CategoryList extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {list: []};
    }
    */

    /*
    componentDidMount() {
        this.setState(
            {list: fetchTestCategories(), }
        );
    }
    */

    render() {
        let LIST = this.props.list;

        return (
            <div className="CategoryList">
                <header className="CategoryList-header">
{/*
                    <ul>
                        {LIST.map(a => <li key={a.id}>`{a.name} :: {a.budget}`</li>)}
                    </ul>
*/}
                    <ul>
                        { LIST && LIST.length
                            ? LIST.map(ITEM => <CategoryItem item={ITEM} />)
                            : `category list is empty!` }
                    </ul>
                </header>
            </div>
        );
    }
}

const mapState = (REDUX_STORE) => {
    return {
        list: REDUX_STORE.categories.categoryList,
    }
}

export default connect(mapState)(CategoryList);