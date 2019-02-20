import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../../Redux/actions'

// import fetchTestCategories from '../../Models/TestData';

class CategoryAdd extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newCategoryObject: {
                id: '',
                name: '',
                budget: '',
            },
        }
    }

/*
    // INPUT TEST DATA TO REDUX STORE
    componentDidMount() {
        let TEST_DATA = fetchTestCategories();

        for( let i=0 ; i < TEST_DATA.length ; i++) {
            this.props.addCategory(TEST_DATA[i]);
            // console.log(TEST_DATA[i]);
        }
    }
*/
    _handleUpdate = e => {
        this.setState({
            newCategoryObject:{
                ...this.state.newCategoryObject,
                [e.target.name] : e.target.value
        }
    });
}

    _handleAddCategory = (e) => {
        e.preventDefault();

        const category = this.state.newCategoryObject;
//        console.log(category);
        this.props.addCategoryLocal(category);

        // other way to reset input boxes?
        this.setState({
            newCategoryObject:{
                id: '',
                name: '',
                budget: '',
            }
        })

        /*
         * old add category

        // dispatch actions to add category
        this.props.addCategory(this.state);
        // reset input box to empty string
        this.setState({
            id: '', name: '', budget: '',
        })
        */
    }

    render() {
        return(
            <div>
                {/*
                 * need study on this!
                 * <input type="text" name="id" onChange={e => this._handleUpdate(e)} value={this.state.id} />
                */}
                <p>id: <input type="text" name="id" onChange={this._handleUpdate} value={this.state.newCategoryObject.id}/></p>
                <p>name: <input type="text" name="name" onChange={this._handleUpdate} value={this.state.newCategoryObject.name}/></p>
                <p>budget: <input type="text" name="budget" onChange={this._handleUpdate} value={this.state.newCategoryObject.budget}/></p>
                
                <button className="_addCategory" onClick={this._handleAddCategory}>ADD</button>
            </div>
        );
    };
}

const mapDispatch = dispatch => ({
    addCategoryLocal: (category) => {
        dispatch(addCategory(category));
    },
});

/*
 * pass addCategory action to connect,
 * the component receives it as a prop,
 * action will be dispatched when it's called
*/
export default connect(
    null, mapDispatch
)(CategoryAdd);