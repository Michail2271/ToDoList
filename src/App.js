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
        ],

        filterValue: 'All'
    };

    componentDidMount = () => {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);

        localStorage.setItem('state', stateAsString);
    }

    restoreState = () => {
        let stateAsString = localStorage.getItem('state');
        if (stateAsString) {
            let state = JSON.parse(stateAsString);

            state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1
                }
            })
            this.setState(state);
        }
    }

    nextTaskId = 1;

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: 'low'

        };

        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState();
        });

    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue

        });

    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id == taskId) {
                return { ...t, ...obj };
            }
            return t;
        });
        this.setState({
            tasks: newTasks
        });
    }

    changeStatus = (taskId, isDone) => {
        let obj = { isDone: isDone }
        this.changeTask(taskId, obj);
    }

    changeTitle = (taskId, title) => {
        let obj = { title: title }
        this.changeTask(taskId, obj);
    }




    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader addTask={this.addTask} />
                    <ToDoListTasks changeStatus={this.changeStatus} changeTitle={this.changeTitle} tasks={this.state.tasks.filter((t) => {
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

