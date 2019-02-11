import React, { Component } from 'react';
import CategoryList from '../../Components/CategoryComponents/CategoryList';
import CategoryAdd from '../../Components/CategoryComponents/CategoryAdd';

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
            </div>
        );
    }
}