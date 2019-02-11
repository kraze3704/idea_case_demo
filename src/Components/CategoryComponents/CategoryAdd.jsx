import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../../Redux/actions'

// import fetchTestCategories from '../../Models/TestData';

class CategoryAdd extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            budget: '',
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
        this.setState({ [e.target.name] : e.target.value });
    }

    _handleAddCategory = (e) => {
        e.preventDefault();

        // dispatch actions to add category
        this.props.addCategory(this.state);
        // reset input box to empty string
        this.setState({
            id: '', name: '', budget: '',
        })
    }

    render() {
        return(
            <div>
                {/*
                 * need study on this!
                 * <input type="text" name="id" onChange={e => this._handleUpdate(e)} value={this.state.id} />
                */}
                <p>id: <input type="text" name="id" onChange={this._handleUpdate} value={this.state.id}/></p>
                <p>name: <input type="text" name="name" onChange={this._handleUpdate} value={this.state.name}/></p>
                <p>budget: <input type="text" name="budget" onChange={this._handleUpdate} value={this.state.budget}/></p>
                
                <button className="_addCategory" onClick={this._handleAddCategory}>ADD</button>
            </div>
        );
    };
}


/*
 * pass addCategory action to connect,
 * the component receives it as a prop,
 * action will be dispatched when it's called
*/
export default connect(
    null, {addCategory}
)(CategoryAdd);