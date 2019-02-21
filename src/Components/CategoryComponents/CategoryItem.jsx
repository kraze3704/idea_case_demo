import React, { Component } from 'react';

export default class CategoryItem extends Component{
    /*
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    */

    render() {
        let ITEM = this.props.item;

        return (
            <span>{ITEM.name} :: {ITEM.budget}</span>
        );
    }
}