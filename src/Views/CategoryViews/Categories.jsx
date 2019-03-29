import React, { Component } from 'react';
import CategoryList from '../../Components/CategoryComponents/CategoryList';
import CategoryAdd from '../../Components/CategoryComponents/CategoryAdd';
import RandomizedCategory from '../../Components/CategoryComponents/RandomizedCategory';
import CategoryFilterByBudgetLimit from '../../Components/CategoryComponents/CategoryFilterByBudgetLimit';

export default class Categories extends Component {
    /*
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    }
    */

    render() {

        return (
            <div className="Container">
                <CategoryAdd />
                <CategoryList />
                <RandomizedCategory />
                <CategoryFilterByBudgetLimit />
            </div>
        );
    }
}