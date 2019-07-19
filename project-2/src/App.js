import React from 'react';
import './App.css';
import AddComponent from './Components/AddComponent.js'
import { TaskList } from './TaskList.js'
import uuid from 'uuid/v4';

//import './Components/bootstrap/dist/css/bootstrap.css';
//import './Components/bootstrap/dist/css/bootstrap-theme.css';

class App extends React.Component {
   constructor() {
     super()
      this.state = {
        todoes: []
      }
   }
  
  addTodo (nameValue) {
    let newTask = {
      name: nameValue, 
      status: false,
      id: uuid()
    }
    this.setState({ 
      todoes: [...this.state.todoes, newTask]
    });
  }

  checkTasks() {
    let count = 0;
    for (let i = 0; i<this.state.todoes.length; i++) {
      if (this.state.todoes[i].status === false) {
        count++;
      }
    }
    this.setState(state => {
      const todoes = state.todoes.map(e => {
        if (count === 0) {
          e.status = false;
        } else {
          e.status = true;
        }
        return e.status;
      });
      return {status: todoes};
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
    const newArray = this.state.todoes.filter(el => (el.id !== id));
    this.setState ({ 
      todoes: newArray
    });
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
    if (arrayOfCompleted.length !== 0) {
      let clearedFromComleted = this.state.todoes.filter(e => e.id !== arrayOfCompleted[0].id);
      for (let i = 1; i < arrayOfCompleted.length; i++) {
        clearedFromComleted = clearedFromComleted.filter(e => e.id !== arrayOfCompleted[i].id);
      }
      this.setState({
        todoes: clearedFromComleted
      })
    } else {
      alert("Nothing to delete");
    }
  }
  /*******************______**************************/
  
  render() {
    return (
      <div className="App container" id="app">
        <header className="App-header text-center">todos</header>
        <div className="taskBody shadow">
          <AddComponent 
            addTodo = { (e) => this.addTodo(e) }
            checkTask = { () => this.checkTasks() }
            array = { this.state.todoes } 
          />
          <TaskList 
            array = { this.state.todoes } 
            checkTask = { (id, bool) => this.checkTask(id, bool) }
            changeTaskName = { (name, id) => this.changeText(name, id) }
            deleteTask = { (id) => this.deleteTask(id) }
            removeAllCompleted = { (arrayOfCompleted) => this.removeAllCompleted(arrayOfCompleted) }
          /> 
        </div>
      </div>
    );
  }
  
}

export default App;
