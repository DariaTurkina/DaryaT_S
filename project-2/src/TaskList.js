import React from 'react';
import  Todo  from './Components/Todo.js'
import Filter from './Components/Filter.js'

class TaskList extends React.Component {

    state = {
        filterState: "all",
        array: this.props.array
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
        
        //console.log('DATA >>> ', toRender);
        return toRender.map( item => {
            return (
                <Todo
                    taskName = {item.name}
                    taskStatus = {item.status}
                    id = {item.id}
                    checkTask = {eThis.checkTask}
                    changeTaskName = {eThis.changeTaskName}
                    deleteTask = {eThis.deleteTask}
                />
            )
        });
    }

    render() {
        console.log('@@render@@');
        return (
            <div className = "TaskList">
                
                { this.props.array.length ? this.showTaskList(this.props.array, this.state.filterState) : null }
                { this.props.array.length !== 0 && 
                    <Filter 
                        transmit = { (todoes, whatToRender) => this.showTaskList(todoes, whatToRender) }
                        removeAllCompleted = { this.state.removeAllCompleted }
                        array = { this.props.array }
                    />
                }
            </div>
        )
    }
}

export { TaskList }