import React from 'react';
import './App.css';



class ToDoListTask extends React.Component {

    state ={
        editMode:false
    }

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    }

    activateEditMode = () =>{
        this.setState({editMode:true});
    }

    deactivateEditMode = () => {
        this.setState({editMode:false});
    }

    onTitleChanged = (e) => {
            this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    }

    render = () => {

        const taskClassName = this.props.task.isDone ? 'todoList-task done' : 'todoList-task';

        return (
            <div className="todoList-tasks">
                <div className={taskClassName}>
                    <input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChanged} />
                    { this.state.editMode ? <input value={this.props.task.title} autoFocus={true} onBlur={this.deactivateEditMode} 
                    onChange={this.onTitleChanged}/>
                    : <span onClick={ this.activateEditMode }>{this.props.task.id} - {this.props.task.title}</span>
                    },
                     priority: {this.props.task.priority}
                    
                </div>
            </div>
        );
    }
}

export default ToDoListTask;

