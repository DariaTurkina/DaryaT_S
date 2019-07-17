import React from 'react';

export default class Filter extends React.Component {    
    
    state = {
        activeTasks: [],
        completedTasks: []
    }

    Counter(todoes) { //!!!!!!!!!!!!!!!!!!!!!!!!!!1
        let sum = this.state.activeTasks.length+this.state.completedTasks.length;
        if (todoes.length > sum) {
            this.setState({ activeTasks: todoes.filter(e => e.status === false) });
            this.setState({ completedTasks: todoes.filter(e => e.status === true) });
        } else {
            console.log('=> wtf ', todoes);
            for (let i = 0; i < todoes.length; i++) {
                console.log('=> i ', i);
                if (todoes[i].id === this.state.activeTasks.id && 
                    todoes[i].status !== this.state.activeTasks.status) 
                {
                    console.log('=> active ');
                    this.setState({ ...this.state.activeTasks, activeTasks: todoes[i] });
                } else if (todoes[i].id === this.state.completedTasks.id && 
                    todoes[i].status !== this.state.completedTasks.status) 
                {
                    console.log('=> completed');
                    this.setState({ ...this.state.completedTasks, completedTasks: todoes[i] });
                }
            }
        }
        //console.log("Filter state", this.state)
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
                        onClick = { () => this.props.transmit(todoes, "all") } 
                        value = "All"
                    />
                    <input 
                        type = "submit" 
                        onClick = { () => this.props.transmit(todoes, "active") } 
                        value = "Active"
                    />
                    <input 
                        type = "submit" 
                        onClick = { () => this.props.transmit(todoes, "completed") } 
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