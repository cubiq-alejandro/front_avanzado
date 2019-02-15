import React, { Component } from 'react';
import Swal from 'sweetalert2'    
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation'
import TodoForm from './components/TodoForm'
import { todos } from './todos.json'

import TodoContainer from './components/TodoContainer'

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
  handleDeleteTodo(index){

    console.log( index )
    Swal.fire({
      title: 'Está seguro que desea borrar la tarea',
      text: "Esta accion no se puede deshacer",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      if (result.value) {

        this.setState({
          todos: this.state.todos.filter((e,i) => {
            return i !== index
          })
        })              

        Swal.fire(
          'Borrado',
          'Su tarea ha sido borrada.',
          'success'
        )
      }
    })  
  }

  render() {
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
                <TodoContainer todos={this.state.todos} onDeleteTodo={this.handleDeleteTodo.bind(this)} />
            </div>

          </div>
        </div>
      </div>      
    );
  }
}

export default App;
