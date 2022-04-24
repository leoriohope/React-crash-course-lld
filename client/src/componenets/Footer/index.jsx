import React, { Component } from 'react';
import './index.css'

class Footer extends Component {

    handleDoneAll = (event) => {
        // 更改todos的isDone
        const {updateTodoAll} = this.props
        updateTodoAll(event.target.checked)
    }

    handleDeleteAll = () => {
        // console.log("deleteAllDone")
        this.props.deleteAllDone()
    }

    render() {
        // 拿到todo
        const { todos } = this.props
        // 计算已完成和总数
        let alreadyDone = 0
        let total = 0
        alreadyDone = todos.reduce((pre, todo) => (pre + (todo.isDone ? 1 : 0))
            , 0)
        total = todos.length
        // console.log("%%" + alreadyDone, total)


        return (
            <div className='todo-footer'>
                <label>
                    <input onChange={this.handleDoneAll}  checked={(alreadyDone === total && alreadyDone !== 0 ? true : false)} type="checkbox" />
                </label>
                <span>
                    <span>Done {alreadyDone} </span>  /{total}
                </span>
                <button onClick={this.handleDeleteAll} className='btn btn-dange'>Delete already done</button>
            </div>
        );
    }
}

export default Footer;
