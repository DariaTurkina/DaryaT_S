import React from 'react';
import  Todo  from './Components/Todo.js'
import Filter from './Components/Filter.js'

class TaskList extends React.Component {
    
    state = {
        //
    }

    showTaskList(data) {
        const {checkTask, changeTaskName, deleteTask} = data;
        return data.map(function (item) {
            return (
                <Todo
                    taskName = {item.name}
                    taskStatus = {item.status}
                    id = {item.id}
                    checkTask = {checkTask}
                    changeTaskName = {changeTaskName}
                    deleteTask = {deleteTask}
                />
            )
        })
    }

    render() {
        return (
            <div className = "TaskList">
                {this.props.array.length ? this.showTaskList(this.props.array) : null}
                { this.props.array.length !== 0 && 
                    <Filter 
                        transmit = { (showingArray) => this.showTaskList(showingArray) }
                        array = { this.props.array }
                    />
                }
            </div>
        )
    }
}

export { TaskList }