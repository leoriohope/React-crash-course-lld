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
        ]
    }

    render() {
        const {todos} = this.state
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header />
                    <List todos={todos}/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;


