import React, { Component } from 'react';
import fetchTestCategories from '../../Models/TestData';
import CategoryItem from './CategoryItem';

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {list: []};
    }

    componentDidMount() {
        this.setState(
            {list: fetchTestCategories(), }
        );
    }

    render() {
        let a = this.state.list;

        return (
            <div className="CategoryList">
                <header className="CategoryList-header">
{/*
                    <ul>
                        {a.map(a => <li key={a.id}>`{a.name} :: {a.budget}`</li>)}
                    </ul>
*/}
                    <ul>
                        {a.map(a => <CategoryItem item={a} />)}
                    </ul>
                </header>
            </div>
        );
    }
}