import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryItem from '../CategoryComponents/CategoryItem';

class RandomizedCategory extends Component {
    /*
     * [X] randomized single Category shown in CategoryItem Component
     * [X] Randomized Category that includes CategoryItem
     * [X] Randomized Category is connect to Redux
    */
    render() {

        const LIST = this.props.categories;
        const LIST_LENGTH = (LIST) ? LIST.length : -1;
        // [X] avoid error when LIST doesn't exist

        if (LIST_LENGTH > 0) {
            const RANDOM_CATEGORY = Math.floor(Math.random() * LIST_LENGTH);
            return (
                <div>
                    <CategoryItem item={LIST[RANDOM_CATEGORY]} />
                </div>
            )
        } else {
            return (
                <div>
                    NO RANDOM CATEGORY AVAILABLE
                </div>
            )
        }
    }
}


const mapToState = STORE => ({
    categories: STORE.categories.categoryList,
});

export default connect(mapToState)(RandomizedCategory);