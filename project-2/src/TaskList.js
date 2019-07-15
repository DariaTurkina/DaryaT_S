import React from 'react';
import { Todo } from './Components/Todo.js'

class TaskList extends React.Component {

    addTask(data) {
        
        // const data = this.props.array;
        // console.log('PROPSES : ', data)
        this.TaskList.clear();
        const checkFunk = this.props.checkTask;
        const changeFunk = this.props.changeTaskName;
        const delFunk = this.props.deleteTask;
        let newsTemplate = null;

        if (data.length){
            newsTemplate = data.map(function(item) {
                console.log('itemitem', item)
                return (
                    <Todo
                        taskName = { item.name }
                        taskStatus = { item.status }
                        id = { item.id }
                        checkTask = { checkFunk }
                        changeTaskName = { changeFunk }
                        deleteTask = { delFunk }
                    />
                )
            })
        }
        return newsTemplate;
    }

    render() {
        console.log('render List');

        console.log('PROPSES__333 : ', this.props.array)
        return(
            <div className = "TaskList">
                { this.addTask(this.props.array) }
            </div>
        )
    }
}

export { TaskList }