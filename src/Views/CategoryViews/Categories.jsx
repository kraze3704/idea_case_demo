import React, { Component } from 'react';
import CategoryList from '../../Components/CategoryComponents/CategoryList';
import AddCategory from '../../Components/CategoryComponents/AddCategory';

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
                <AddCategory />
                <CategoryList />
            </div>
        );
    }
}