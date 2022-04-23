import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import "./index.css";

class Header extends Component {
    handleKeyUp = (event) => {
        //拿到target和key
        const {key, target} = event
        const {addTodo} = this.props
        // 当enter key 按下的时候创建新的obj并回传给app
        if (key == "Enter") {       
            //输入不能为空，空的时候alert
            if (target.value.trim() == '') {
                alert('输入不能为空')
                return
            }
            const todoObj = {id: nanoid(), name:target.value, isDone: false}
            addTodo(todoObj)
            //清除输入框
            target.value = ''
        }
    }
    
    // const {addTodo} = this.props

    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder='Please type your input, and press Enter' />
            </div>
        );
    }
}

export default Header;
