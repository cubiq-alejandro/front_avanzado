import React,{ Component } from 'react';
class Todo extends Component{
    render(){
        return(
            <div className="col-md-4">
                <div className="card mt-4" >
                <div className="card-header bg-negro">
                    <h3>{this.props.data.title}</h3>
                    <span className="badge badge-pill btn-danger">
                    {this.props.data.priority}            
                    </span>
                </div>
                <div className="card-body">
                    <p>{this.props.data.description}</p>
                    <p>{this.props.data.responsible}</p>
                </div>   
        
                <div className="card-footer">
                    <button 
                    className="btn btn-danger"            
                    onClick={() => { this.props.onDeleteTodo(this.props.index) }}
                    >
                    Delete
                    </button>    
                </div> 
        
                </div>   
          </div>
        )       
    }
}

export default Todo;