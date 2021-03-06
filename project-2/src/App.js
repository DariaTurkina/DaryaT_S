import React from 'react';
import './App.css';
import AddComponent from './Components/AddComponent.js'
import { TaskList } from './TaskList.js'
import { catchClause } from '@babel/types';

const axios = require('axios');//import axios from 'axios';
const path = "http://localhost:1234/todos";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoes: []
    }
  }

  componentDidMount() {
    axios.get(`${path}`)
      .then(res => {
        const data = res.data;
        this.setState({ todoes: data });
      })
      .catch((err) => {
        console.log("SORRY: ", err);
      })
  }

  addTodo(nameValue) {

    let newTask = {
      name: nameValue,
      status: false
    }
    axios.post(`${path}/create`, newTask)
      .then(() => { 
        
        axios.get(`${path}`)
          .then(res => {
            const data = res.data;
            this.setState({ todoes: data });
          })
          .catch((err) => {
            console.log("SORRY: ", err);
          })
      })
      .catch(function (err) {
        console.log("WASN'T WRITTEN, BECAUSE: \n", err)
      })
    this.componentDidMount();
  }

  checkTasks() {
    let count = 0;
    let bool = true;
    for (let i = 0; i < this.state.todoes.length; i++) {
      if (this.state.todoes[i].status === false) {
        count++;
        break;
      }
    }

    if (count === 0) {
      bool = false;
    }
    for (let i = 0; i < this.state.todoes.length; i++) {
      let todo = {
        name: this.state.todoes[i].name,
        status: bool,
        id: this.state.todoes[i]._id
      }
      axios.put(`${path}/${this.state.todoes[i]._id}/update`, todo)
        .then(() => {
          this.setState(state => {
            const todoes = state.todoes.map(e => {
              e.status = bool;
              return e.status;
            });
            return { status: todoes };
          });
        })
        .catch(function (err) {
          console.log("WASN'T UPDATED ALL, BECAUSE: \n", err)
        })
    }
  }
  /************************************************/

  checkTask(id, bool) {
    let thisTodo = this.state.todoes.filter(e => e._id === id);
    let todoToUpdate = {
      name: thisTodo[0].name,
      status: bool,
      id: id
    }
    axios.put(`${path}/${id}/update`, todoToUpdate)
      .then(() => {
        this.setState(state => {
          const todoes = state.todoes.map(e => {
            if (e._id === id) {
              e.status = bool;
              return e.status;
            }
          });
          return { status: todoes };
        });
      })
      .catch(function (err) {
        console.log("WASN'T CHECKED, BECAUSE: \n", err)
      })
  }

  deleteTask(id) {
    const newArray = this.state.todoes.filter(el => (el._id !== id));
    axios.delete(`${path}/${id}/delete`)
      .then(() => {
        this.setState({
          todoes: newArray
        });
      })
      .catch(err => {
        console.log('err in del', err);
      })
  }

  changeText(name, id) {
    this.setState(state => {
      const updated = state.todoes.map(e => {
        if (e._id === id) {
          e.name = name;
          return e.name;
        }
      });
      return { updated, };
    });
  }

  changeTaskName(name, id) {
    axios.put(`${path}/${id}/update`, name)
      .then(() => {
        this.setState(state => {
          const updated = state.todoes.map(e => {
            if (e._id === id) {
              e.name = name;
              return e.name;
            }
          });
          return { updated, };
        });
      })
      .catch(err => {
        console.log('error in changeText', err);
      })
  }
  /************************************************/

  removeAllCompleted(arrayOfCompleted) {
    if (arrayOfCompleted.length !== 0) {

      let clearedFromComleted = this.state.todoes.filter(e => e._id !== arrayOfCompleted[0]._id);
      console.log('arrayOfCompleted >>', arrayOfCompleted);
      axios.delete(`${path}/${arrayOfCompleted[0]._id}/delete`)
        .then(() => {
          this.setState({
            todoes: clearedFromComleted
          });
        })
        .catch(err => {
          console.log(`[0] error:\n`, err);
        })
      for (let i = 1; i < arrayOfCompleted.length; i++) {
        clearedFromComleted = clearedFromComleted.filter(e => e._id !== arrayOfCompleted[i]._id);
        axios.delete(`${path}/${arrayOfCompleted[i]._id}/delete`)
          .then(() => {
            this.setState({
              todoes: clearedFromComleted
            });
          })
          .catch(err => {
            console.log(`[${i}] error:\n`, err);
          })
      }
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
            addTodo={(e) => this.addTodo(e)}
            checkTasks={() => this.checkTasks()}
            array={this.state.todoes}
          />
          <TaskList
            array={this.state.todoes}
            checkTask={(id, bool) => this.checkTask(id, bool)}
            changeTaskName={(name, id) => this.changeTaskName(name, id)}
            changeText={(name, id) => this.changeText(name, id)}
            deleteTask={(id) => this.deleteTask(id)}
            removeAllCompleted={(arrayOfCompleted) => this.removeAllCompleted(arrayOfCompleted)}
          />
        </div>
      </div>
    );
  }

}

export default App;
