import React, { Component } from 'react';
import Header from './componenets/Header';
import List from './componenets/List';
import Footer from './componenets/Footer';
import './App.css';

class App extends Component {

    state = {
        todos: [
            { id: "001", name: "吃饭", isDone: true },
            { id: "002", name: "睡觉", isDone: true },
            { id: "003", name: "打豆豆", isDone: true },
            { id: "004", name: "逛街", isDone: true },

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

    render() {
        const {todos} = this.state
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodo={this.addTodo}/>
                    <List updateTodo={this.updateTodo} todos={todos}/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;


