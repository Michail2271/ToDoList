import React from 'react';
import './App.css';

class ToDoListHeader extends React.Component {

    
    constructor(props) {
        super(props)
        this.newTasksTitleRef = React.createRef();
    }
    

    onAddTaskOnClick=()=>{
        let newText = this.newTasksTitleRef.current.value
        this.newTasksTitleRef.current.value = ''
        this.props.addTask(newText)
    }


    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name" ref={this.newTasksTitleRef}/>
                    <button onClick={this.onAddTaskOnClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default ToDoListHeader;

