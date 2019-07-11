import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import AddComponent from './Components/AddComponent.js'
import Filter from './Components/Filter.js'

var tasks = [{name: '', status: 0}];

class App extends React.Component {
  
  /*constructor(props) {
    super(props);
 
    this.state = {
        name: '',
        status: '' 
    }
  }*/

  
  updateName = (nameValue) => {
    this.setState({ name: nameValue, status: 0});
  }
  
  render(){
    return (
      <div className="App" id="app">
        <header className="App-header">todos</header>
  
        <AddComponent updateName={this.updateName}/>
        <Filter massiv={tasks}/>


      </div>
    );
  }
  
}

export default App;
