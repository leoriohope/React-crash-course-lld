import React, { Component } from 'react';
import "./index.css";

class Header extends Component {
    render() {
        return (
            <div className='todo-header'>
                <input type="text" placeholder='Please type your input, and press Enter' />
            </div>
        );
    }
}

export default Header;
