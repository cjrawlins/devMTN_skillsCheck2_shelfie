// Import Dependencies
import React, {Component} from 'react';
import axios from 'axios';

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
      inventory: [],
      prodToEdit: {}
    }
    this.updateForce = this.updateForce.bind(this);
  }

  componentDidMount() {
    axios.get("/api/inventory/")
      .then( res => {
        this.setState( { inventory: res.data } )
      } )
      .catch( err => console.log( "Error: ", err )
      )
  }

  getAllInventory = () => {
     console.log("Get All Inventory");
     axios.get("/api/inventory/")
      .then( res => {
        this.setState( { inventory: res.data } )
      } )
      .catch( err => console.log( "Error: ", err )
      )
  }

  addProduct = (name, price, imgurl) => {
    axios.post("/api/inventory/", {name, price, imgurl})
     .then( res => {
       this.setState( { inventory: res.data } )
     } )
     .catch( err => console.log( "Error: ", err )
     )
  }

    editProduct = (prodId) => {
      const prodData = this.state.inventory.find( e => { 
        return e.id === prodId;
      })
      this.setState( { prodToEdit: prodData } )
    }

    updateForce() {
      console.log("Force App Update Called", this.state.inventory);
      if (this.state.inventory.length === 0) {
        console.log('Empty Array Getting Inventory');
        this.getAllInventory();
      } else {
        console.log('Not Empty Array');
      this.setState({});
      }
    }

  render() {
    return (
      <div className="App-Main">
        <Header/>
        <main className="main-container">
          <Form
            getAllInventory = {this.getAllInventory}
            addProduct = {this.addProduct}
            prodToEdit = {this.state.prodToEdit}
            updateForce = {this.updateForce}
          />
          <Dashboard
            currInventory = {this.state.inventory}
            getAllInventory = {this.getAllInventory}
            deleteProduct = {this.deleteProduct}
            editProduct = {this.editProduct}
            updateForce = {this.updateForce}
          />
        </main>
      </div>
    ); //End Return
  } //End Render
} //End App

export default App;
