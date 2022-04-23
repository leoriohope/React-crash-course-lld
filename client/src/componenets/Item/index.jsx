import React, { Component } from 'react';
import './index.css'

class Item extends Component {
    state = {
        isHighlight: false,
    }

    setHighlight = (flag) => {
        return () => {
            this.setState({ isHighlight: flag })
        }
    }

    handleCheck = (id) => {
        return (event) => {
            const { updateTodo } = this.props
            updateTodo(id, event.target.checked)
            console.log(event.target.checked)
        }

    }

    render() {
        const { name, id, isDone } = this.props
        const { isHighlight } = this.state
        return (
            <li style={{ backgroundColor: isHighlight ? '#39FFFF' : '#39CCCC' }} onMouseEnter={this.setHighlight(true)} onMouseLeave={this.setHighlight(false)}>
                <label>
                    <input onChange={this.handleCheck(id)} type="checkbox" defaultChecked={isDone} />
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger' style={{ display: isHighlight ? 'block' : 'none' }}>Delete</button>
            </li>
        );
    }
}

export default Item;
