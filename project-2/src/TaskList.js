import React from 'react';
import  Todo  from './Components/Todo.js'
//import './TaskList.css';
import Filter from './Components/Filter.js'

class TaskList extends React.Component {

    state = {
        filterState: "all"
    };
    
    showTaskList(data, whatToRender) {
        const eThis = this.props;
        let toRender = [];
        if (this.state.filterState !== whatToRender) {
            if (whatToRender === "active") {
                this.setState({ filterState: "active"});
                toRender = data.filter(item => item.status === false);
            } else if (whatToRender === "completed") {
                this.setState({ filterState: "completed"});
                toRender = data.filter(item => item.status === true);
            } else if (whatToRender === "all") {
                this.setState({ filterState: "all"});
                toRender = data;
            }
        } else {
            if (whatToRender === "active") {
                toRender = data.filter(item => item.status === false);
            } else if (whatToRender === "completed") {
                toRender = data.filter(item => item.status === true);
            } else if (whatToRender === "all") {
                toRender = data;
            }
        }
        return toRender.map( (item, idx) => (
                <Todo
                    key={idx}
                    taskName = {item.name}
                    taskStatus = {item.status}
                    id = {item.id}
                    checkTask = {eThis.checkTask}
                    changeTaskName = {eThis.changeTaskName}
                    deleteTask = {eThis.deleteTask}
                />
            )
        );
    }

    render() {
        console.log('@@render@@', this.props);
        return (
            <div className = "TaskList">
                
                {this.showTaskList(this.props.array, this.state.filterState)}
                { this.props.array.length !== 0 && 
                    <Filter 
                        transmit = { (todoes, whatToRender) => this.showTaskList(todoes, whatToRender) }
                        removeAllCompleted = { this.props.removeAllCompleted }
                        array = { this.props.array }
                        taskListStatus = {this.state.filterState}
                    />
                }
            </div>
        )
    }
}

export { TaskList }