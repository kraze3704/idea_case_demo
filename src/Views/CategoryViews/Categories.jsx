import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
        /* older rendering without Router
        return (
            <div className="Container">
                <CategoryAdd />
                <CategoryList />
                <RandomizedCategory />
                <CategoryFilterByBudgetLimit />
            </div>
        );
        */
       return(
        <Router>
            <CategoryAdd />

            <div class="nav-bar">
                <nav>
                    <ul>
                        <li><Link to="/">category list</Link></li>
                        <li><Link to="/categoryFiltered">category filtered</Link></li>
                    </ul>
                </nav>

                <Route path="/" exact component={CategoryList} />
                <Route path="/categoryFiltered" component={CategoryFilterByBudgetLimit} />
            </div>

            <RandomizedCategory />
        </Router>
       );
    }
}