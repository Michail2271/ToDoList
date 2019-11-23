import React from 'react';
import './App.css';
import ToDoListHeader from './ToDoListHeader';
import ToDoListTasks from './ToDoListTasks';
import ToDoListFooter from './ToDoListFooter';



class App extends React.Component {

    constructor(props) {
        super(props)
        this.newTaskTitleref = React.createRef();
    }

    state = {
        tasks: [
            { title: 'CSS', isDone: true, priority: 'low' },
            { title: 'HTML', isDone: true, priority: 'medium' },
            { title: 'JS', isDone: true, priority: 'low' },
            { title: 'React', isDone: false, priority: 'high' },
        ],

        filterValue: 'All'
    }

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: 'low'
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        })
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue

        });

    }

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if (t != task) {
                return t;
            }
            else {
                return { ...t, isDone: isDone };
            }
        });
        this.setState({
            tasks: newTasks
        })
    }



    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader addTask={this.addTask} />
                    <ToDoListTasks  changeStatus={this.changeStatus} tasks={this.state.tasks.filter((t) => {
                        if (this.state.filterValue === 'All')
                            return true;
                        if (this.state.filterValue === 'Completed')
                            return t.isDone === true;
                        if (this.state.filterValue === 'Active')
                            return t.isDone === false;
                    })} />
                    <ToDoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}


export default App;

