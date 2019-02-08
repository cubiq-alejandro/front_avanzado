import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation'
import TodoForm from './components/TodoForm'
import { todos } from './todos.json'

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos
    }

    this.handleAddTodo = this.handleAddTodo.bind(this)    
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos,todo]
    })
  }

  // 2 Creamos el handle
  handleDeleteTodo(index){ // 3 Le pasamos el indice
    console.log(index) // 4 Vemos el indice

    // 6 Filtramos con filter
    /*this.setState({
      todos: this.state.todos.filter((e,i) => {
        return i !== index
      })
    })*/

    // 7 Agregamos un confirm
    if(window.confirm('Are you sure')){
      this.setState({
        todos: this.state.todos.filter((e,i) => {
          return i !== index
        })
      })      
    }

    // Usamos Swet Alert
    /*
        npm install sweetalert2
        import Swal from 'sweetalert2'    
    
    */

  }

  render() {

    const todos = this.state.todos.map((todo,index) => {
      return(

      <div className="col-md-4" key={index}>
        <div className="card mt-4" >
          <div className="card-header">
            <h3>{todo.title}</h3>
            <span className="badge badge-pill btn-danger">
              {todo.priority}            
            </span>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
            <p>{todo.responsible}</p>
          </div>   

          {/* 1 Agregamoss el footer */}
          {/* onClick={this.handleDeleteTodo}  1.1 Agregamoss el evento onclick */}
          <div className="card-footer">
            <button 
              className="btn btn-danger"            
              onClick={this.handleDeleteTodo.bind(this,index)} // 5 agregamos la referencia this y bind y le pasamos el indice
            >
              Delete
            </button>    
          </div> 

        </div>   
      </div>
      )
    })

    return (
      <div className="App">      
        <Navigation titulo="TodoApp Extreme" />

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} className="App-logo" alt="logo" /> 
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>

          </div>
        </div>
      </div>      
    );
  }
}

export default App;
