import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import "./index.css";

class List extends Component {
    // 对接受的props进行： 类型，必要性的限制
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const { todos, updateTodo, deleteTodo } = this.props
        return (
            <ul className='todo-main'>
                {todos.map((todo) => {
                    return <Item deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.id} {...todo} />
                })
                }
            </ul>
        );
    }
}

export default List;
