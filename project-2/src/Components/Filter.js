import React from 'react';

export default class Filter extends React.Component {    
    
    state = {
        activeTasks: [],
        completedTasks: []
    }

    Counter(todoes) {

        this.state = { ...this.state, activeTasks: todoes.filter(e => e.status === false) };
        this.state = { ...this.state, completedTasks: todoes.filter(e => e.status === true) };
        console.log('STATE_F : ', this.state);
        return this.state.activeTasks.length;
    }
    
    render() {
        const todoes = this.props.array;
        return (
            <div className = "Filter">
                <div className = "Counter">
                    <p>{ this.Counter(todoes) } items left</p>
                </div>
                <div className = "FilterButtons">
                    <input 
                        type = "submit" 
                        onClick = { () => this.props.transmit(todoes) } 
                        value = "All"
                    />
                    <input 
                        type = "submit" 
                        onClick = { () => this.props.transmit(this.state.activeTasks) } 
                        value = "Active"
                    />
                    <input 
                        type = "submit" 
                        onClick = { () => this.props.transmit(this.state.completedTasks) } 
                        value = "Completed"
                    />
                </div>
                <div className = "ClearingButton">
                    <input 
                        type = "submit" 
                        value = "Clear completed" 
                        onClick = { () => this.props.removeAllCompleted(this.state.completedTasks) } 
                    />
                </div>
            </div>
        )
    }

}