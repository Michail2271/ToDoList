import React from 'react';
import './App.css';
import ToDoListTask from './ToDoListTask';



class ToDoListTasks extends React.Component {
    render = () => { 
        let tasksElements = this.props.tasks.map((task) => {
            return <ToDoListTask    task={task}  changeStatus = {this.props.changeStatus} changeTitle = {this.props.changeTitle}/>
        });


        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default ToDoListTasks;

