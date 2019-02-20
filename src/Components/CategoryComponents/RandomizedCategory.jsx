import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryItem from '../CategoryComponents/CategoryItem';

class RandomizedCategory extends Component {
    /*
     * [ ] randomized single Category shown in CategoryItem Component
     * [ ] Randomized Category that includes CategoryItem
     * [X] Randomized Category is connect to Redux
    */
    render() {

        const LIST = this.props.categories;
        const LIST_LENGTH = LIST.length;

        if (LIST_LENGTH > 0) {
            const RANDOM_CATEGORY = Math.floor(Math.random() * LIST_LENGTH) + 1;
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