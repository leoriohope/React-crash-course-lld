import React, { Component } from 'react';
import './index.css'

class Footer extends Component {
    render() {
        return (
            <div className='todo-footer'>
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>Done 0</span>  /2
                </span>
                <button className='btn btn-dange'>Delete alreday done</button>
            </div>
        );
    }
}

export default Footer;
