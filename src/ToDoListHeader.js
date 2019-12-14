import React from 'react';
import './App.css';

class ToDoListHeader extends React.Component {

    state={
        error:false, 
        title:'hello'
    }
    
    onKeyPress = (e) =>{
        if (e.key === 'Enter') {
            this.onAddTaskOnClick()
        }
    }

    onTitleChanged = (e) =>{
        this.setState( {title : e.currentTarget.value} )
    }

    onAddTaskOnClick = () =>{
        let newText = this.state.title
        if (newText !== '') {
            this.props.addTask(newText);
            this.setState( {error: false, title:''} )
        }else{
            this.setState( {error: true} )
        }
        // this.props.addTask(newText)
    }


    render = () => {

        const inputClassName = this.state.error ? 'error': '';

        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name"
                    onKeyPress={this.onKeyPress}
                    onChange={this.onTitleChanged}
                    value={this.state.title}
                    className={inputClassName}/>
                    <button onClick={this.onAddTaskOnClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default ToDoListHeader;

