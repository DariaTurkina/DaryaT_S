import React from 'react';
import { Todo } from './Components/Todo.js'

class TaskList extends React.Component {

    addTask() {
        
        const data = this.props.array;
        console.log('propseses : ', data)
        //const checkFunk = this.props.checkTask;
        const delFunk = this.props.deleteTask;
        let newsTemplate = null;

        if (data.length){
            newsTemplate = data.map(function(item) {
                return (
                    <Todo
                        taskName = { item.name }
                        taskStatus = { item.status }
                        id = { item.id }
                        //checkTask = { checkFunk }
                        deleteTask = { delFunk }
                    />
                )
            })
        }
        return newsTemplate;
    }

    render() {
        return(
            <div className = "TaskList">
                { this.addTask() }
            </div>
        )
    }
}

export { TaskList }