import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import AddComponent from './Components/AddComponent.js'
import { TaskList } from './TaskList.js'
//import Filter from './Components/Filter.js'

class App extends React.Component {
  
  constructor(props) {
    super(props);
 
    this.state = {
        todoes: []
    }
    this.deleteTask = this.deleteTask.bind(this);
  }
  
  addTodo (nameValue) {
    
    const uuid = require('uuid/v4');

    let newTask = {
      name: nameValue, 
      status: false,
      id: uuid()
    }
    this.setState ({ 
      todoes: [ ...this.state.todoes, newTask ]
    });
  }

  checkTask(id, bool) {
    this.setState(state => {
      const todoes = state.todoes.map(e => {
        if (e.id === id) {
          e.status = bool;
          console.log('vvv>>>', e.status)
          return e.status;
        }
      });
      console.log(">>", todoes)
      return {status: todoes};
    });
  }

  deleteTask (id) {
    const filteredTasks = this.state.todoes.filter(el => (el.id !== id));
    console.log('@@@filteredTasks', filteredTasks);
    this.setState({
      todoes: filteredTasks
    })
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
  
  render() {
    console.log('render App');
    return (
      <div className="App" id="app">
        <header className="App-header">todos</header>
  
        <AddComponent 
          addTodo = { (e) => this.addTodo(e) }
        />
        { Array.isArray(this.state.todoes) && <TaskList 
          array = { this.state.todoes } 
          checkTask = { (id, bool) => this.checkTask(id, bool) }
          changeTaskName = { (name, id) => this.changeText(name, id) }
          deleteTask = { (id) => this.deleteTask(id) }
        />}


      </div>
    );
  }
  
}

export default App;
