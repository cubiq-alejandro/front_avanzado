import React,{ Component } from 'react';
import Todo from './Todo';

class TodoContainer extends Component{
    render(){
        return(
            <div className="row">
                {
                    this.props.todos.map((todo) => {
                        return(<Todo data={todo} key={todo.id} index={todo.id} onDeleteTodo={this.props.onDeleteTodo}  />)
                    })
                }                
            </div>
        )       
    }
}

export default TodoContainer;