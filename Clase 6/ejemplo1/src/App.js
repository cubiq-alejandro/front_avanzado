import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation'; 
import { todos } from './todos.json' 

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos
    }
  }

  render() {
    const todos = this.state.todos.map((todo,i) => {
      return (
        <div className="card">
          {todo.title}
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation title="Task"/>
        { todos }
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
