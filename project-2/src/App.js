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

  count = 0;
  
  addTodo (nameValue) {
    let newTask = {
      name: nameValue, 
      status: false,
      id: this.count
    }
    this.setState ({ 
      todoes: [ ...this.state.todoes, newTask ]
    });
    this.count++;
    console.log('ADDTODO NOW : ', this.state.todoes)
  }

  checkTask(id) {
    const whatIsCheck = this.state.todoes.filter(el => el.id === +id);
    const allWithoutCheckedNow = this.state.todoes.filter(el => el.id !== +id);
    whatIsCheck.status = !whatIsCheck.status;
    const all = whatIsCheck + allWithoutCheckedNow;
    this.setState({
      todoes: all
    })

  }

  deleteTask (id) {
    console.log('ID', id)
    const filteredTasks = this.state.todoes.filter(el => el.id !== +id) 

    console.log('filteredTasks', filteredTasks)
    this.setState({
      todoes: filteredTasks
    })
    //actions with count
  }
  
  render() {
    return (
      <div className="App" id="app">
        <header className="App-header">todos</header>
  
        <AddComponent 
          addTodo = { (e) => this.addTodo(e) }
        />
        { Array.isArray(this.state.todoes) && <TaskList 
          array = { this.state.todoes } 
          //checkTask = { (id) => this.checkTask(id) }
          deleteTask = { (id) => this.deleteTask(id) }
        />}


      </div>
    );
  }
  
}

export default App;
