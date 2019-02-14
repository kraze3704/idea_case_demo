import React, { Component } from 'react';

export default class CategoryItem extends Component{
    /*
    constructor(props) {
        super(props);
    }
    */

    componentDidMount() {
    }

    render() {
        let ITEM = this.props.item;

        return (
            <li>{ITEM.name} :: {ITEM.budget}</li>
        );
    }
}