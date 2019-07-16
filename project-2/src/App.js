import React from 'react';
//import './App.css';
import AddComponent from './Components/AddComponent.js'
import { TaskList } from './TaskList.js'
import uuid from 'uuid/v4';

class App extends React.Component {
  
  state = {
    todoes: []
  }
  
  addTodo (nameValue) {
    let newTask = {
      name: nameValue, 
      status: false,
      id: uuid()
    }
    this.setState ({ 
      todoes: [ ...this.state.todoes, newTask ]
    });
  }
 /************************************************/

  checkTask(id, bool) {
    this.setState(state => {
      const todoes = state.todoes.map(e => {
        if (e.id === id) {
          e.status = bool;
          return e.status;
        }
      });
      return {status: todoes};
    });
  }

  deleteTask (id) {
    this.setState({ ...this.state, todoes: this.state.todoes.filter(el => (el.id !== id)) })
  }

  changeText(name, id) {
    
    this.setState(state => {
      const updated = state.todoes.map(e => {
          if (e.id === id) {
            e.name = name;
            return e.name;
          }
        });
        return {updated,};
    });

  }
  /************************************************/

  removeAllCompleted(arrayOfCompleted) {
    let clearedFromComleted = this.state.todoes.filter(e => e.id !== arrayOfCompleted[0].id);
    for (let i = 1; i < arrayOfCompleted.length; i++) {
      clearedFromComleted = clearedFromComleted.filter(e => e.id !== arrayOfCompleted[i].id);
    }
    this.setState({
      todoes: clearedFromComleted
    })
  }
  /*******************______**************************/
  
  render() {
    return (
      <div className="App" id="app">
        <header className="App-header">todos</header>
  
        <AddComponent 
          addTodo = { (e) => this.addTodo(e) }
        />
        <TaskList 
          array = { this.state.todoes } 
          checkTask = { (id, bool) => this.checkTask(id, bool) }
          changeTaskName = { (name, id) => this.changeText(name, id) }
          deleteTask = { (id) => this.deleteTask(id) }
          removeAllCompleted = { (arrayOfCompleted) => this.removeAllCompleted(arrayOfCompleted) }
        /> 

      </div>
    );
  }
  
}

export default App;
