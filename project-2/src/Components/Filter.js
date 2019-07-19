import React from 'react';
import './Filter.css';

export default class Filter extends React.Component {
    state = {
        activeTasks: [],
        completedTasks: []
    }

    Counter(todoes) { //!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.state = { ...this.state, activeTasks: todoes.filter(e => e.status === false) }
        this.state = { ...this.state, completedTasks: todoes.filter(e => e.status === true) }
        /*this.setState({ activeTasks: todoes.filter(e => e.status === false) });
            this.setState({ completedTasks: todoes.filter(e => e.status === true) }); 
        let sum = this.state.activeTasks.length+this.state.completedTasks.length;
        if (todoes.length > sum) {
            this.setState({ activeTasks: todoes.filter(e => e.status === false) });
            this.setState({ completedTasks: todoes.filter(e => e.status === true) });
        } else {//if (this.state.activeTasks.length !== 0 || this.state.completedTasks.length !== 0) {
            for (let i = 0; i < todoes.length; i++) {

                console.log('=> wtf this.state.completedTasks[i].status', this.state.activeTasks[i].status);
                if (this.state.activeTasks[i].status === true) 
                {
                    console.log('=> active ');
                    this.setState({ activeTasks: todoes.filter(e => e.status === false) });
                    this.setState({ completedTasks: todoes.filter(e => e.status === true) });

                } else if (this.state.completedTasks[i].status === false) 
                {
                    console.log('=> completed');
                    this.setState({ activeTasks: todoes.filter(e => e.status === false) });
                    this.setState({ completedTasks: todoes.filter(e => e.status === true) });
                }
            }
        }*/

        //console.log("Filter state", this.state)   justify-content-between
        return this.state.activeTasks.length;
    }

    render() {
        const todoes = this.props.array;
        console.log("Filter state ", this.props)
        return (
            <div className = "Filter justify-content-between align-items-center p-1">
                <div className = "Counter">
                    <p className="pCenter">{this.Counter(todoes)} items left</p>
                </div>
                <div className = "FilterButtons">
                    <button
                        onClick = {() => this.props.transmit(this.todoes, "all")}
                        className = " fil"
                        ref = {(ref) => {this.clickingAll = ref}}
                    >All</button>
                    <button
                        onClick = {() => this.props.transmit(todoes, "active")}
                        className = " fil"
                    >Active</button>
                    <button
                        onClick = {() => this.props.transmit(todoes, "completed")}
                        className = " fil"
                    >Completed</button>
                </div>
                <div className = "ClearingButton">
                    <button
                        type = "submit"
                        onClick = {() => this.props.removeAllCompleted(this.state.completedTasks)}
                        className = {this.state.completedTasks.length !== 0 ? "btn-link  fil clearing" : "invisibleBut"}
                    >Clear completed</button>
                </div>
            </div>
        )
    }
}