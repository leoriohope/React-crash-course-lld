import React, { Component } from 'react';
import Header from './componenets/Header';
import List from './componenets/List';
import Footer from './componenets/Footer';
import './App.css';

class App extends Component {

    state = {
        todos: [
            { id: "001", name: "吃饭", isDone: false },
            { id: "002", name: "睡觉", isDone: false },
            { id: "003", name: "打豆豆", isDone: false },
            { id: "004", name: "逛街", isDone: false },

        ]
    }

    addTodo = (todoObj) => {
        // 拿到state
        const {todos} = this.state
        // 在state前面新加todoObj
        const newTodos = [todoObj, ...todos]
        // 更新state
        this.setState({todos: newTodos})
    }

    updateTodo = (id, isDone) => {
        // 遍历原todo, 比较id， 更新内容
        const {todos} = this.state
        const newTodos = todos.map((todo) => {
                if (todo.id === id) return {...todo, isDone:isDone}
                else return todo
            }
        )
        //set state
        this.setState({todos: newTodos})
    }

    updateTodoAll = (isChecked) => {
        const {todos} = this.state
        const newTodos = todos.map((todo) => {
            return {...todo, isDone: isChecked}
        })
        this.setState({todos: newTodos})
    }

    deleteTodo = (id) => {
        // 拿到原来的todo
        const {todos} = this.state
        // 删除id对应的todo项
        const newTodos = todos.filter((todo) => {
            return todo.id !== id
        })
        this.setState({todos: newTodos})
    }

    deleteAllDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((todo) => {
            return !todo.isDone
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodo={this.addTodo}/>
                    <List deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} todos={todos}/>
                    <Footer deleteAllDone={this.deleteAllDone} updateTodoAll={this.updateTodoAll} todos={todos}/>
                </div>
            </div>
        );
    }
}

export default App;


