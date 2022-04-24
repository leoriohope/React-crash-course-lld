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
            // console.log(event.target.checked)
        }

    }

    handleDelete = (id, name) => {
        // 确定是否删除
        if (window.confirm("确认删除：" + name)) {
            // 在app里删除id对应的todo
            const { deleteTodo } = this.props
            //  调用函数
            deleteTodo(id)
        }

    }

    render() {
        const { name, id, isDone } = this.props
        const { isHighlight } = this.state
        return (
            <li style={{ backgroundColor: isHighlight ? '#39FFFF' : '#39CCCC' }} onMouseEnter={this.setHighlight(true)} onMouseLeave={this.setHighlight(false)}>
                <label>
                    <input onChange={this.handleCheck(id)} type="checkbox" checked={isDone} />
                    <span>{name}</span>
                </label>
                <button onClick={() => { this.handleDelete(id, name) }} className='btn btn-danger' style={{ display: isHighlight ? 'block' : 'none' }}>Delete</button>
            </li>
        );
    }
}

export default Item;
