// Import Dependencies
import React, {Component} from 'react';

// Import Components
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

// Import CSS Files
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
      
    } // End this.state
  } // End Constructor

  componentDidMount() {
    console.log('App CompDidMount Called');
    //Get Inventory from database
  }


  render() {
    return (
      <div className="App-Main">
        <Header/>
        <Dashboard/>
        <Form/>
      </div>
    ); //End Return
  } //End Render
} //End App

export default App;
