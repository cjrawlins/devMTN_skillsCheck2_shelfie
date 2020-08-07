// Import Dependencies
import React, {Component} from 'react';
import axios from 'axios';

//Temp
import dummyData from './dummyData.json';

// Import Components
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

// Import CSS Files
import './reset.css';
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
    this.setState( { inventory: dummyData } )
    //this.getAllInventory();
  }

  getAllInventory = () => {
    axios.get(`/api/inventory/`)
      .then( res => {
        this.setState( { inventory: res.data } )
      } )
      .catch( err => console.log( "Error: ", err ) )
  }



  render() {
    return (
      <div className="App-Main">
        <Header/>
        <main className="main-container">
          <Form/>
          <Dashboard
            currInventory = {this.state.inventory}
          />
        </main>
      </div>
    ); //End Return
  } //End Render
} //End App

export default App;
