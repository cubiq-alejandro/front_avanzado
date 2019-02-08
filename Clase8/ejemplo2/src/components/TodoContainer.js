import React,{ Component } from 'react';
import Todo from './Todo';

class TodoContainer extends Component{
    render(){
        return(
            <div className="row">
                {
                    this.props.todos.map((todo,index) => {
                        return(<Todo data={todo} key={index} index={index} onDeleteTodo={this.props.onDeleteTodo}  />)
                    })
                }                
            </div>
        )       
    }
}

export default TodoContainer;