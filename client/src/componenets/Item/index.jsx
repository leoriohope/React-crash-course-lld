import React, { Component } from 'react';
import './index.css'

class Item extends Component {
    render() {
        const {name, id, isDone} = this.props 
        return (
            <li>
                <label>
                    <input type="checkbox" defaultChecked={isDone}/>
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger' style={{ display: 'none' }}>Delete</button>
            </li>
        );
    }
}

export default Item;
