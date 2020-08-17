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

    this.getAllInventory();

    this.state = {
      inventory: [],
      prodToEdit: {}
      
    } // End this.state
    
  } // End Constructor


  getAllInventory = () => {
     axios.get("/api/inventory/")
      .then( res => {
        this.setState( { inventory: res.data } )
        console.log("Get Inventory App", res.data);
      } )
      .catch( err => console.log( "Error: ", err )
      )
  }


  addProduct = (name, price, imgurl) => {
    axios.post("/api/inventory/", {name, price, imgurl})
     .then( res => {
       this.setState( { inventory: res.data } )
       console.log("Add Product App", res.data);
     } )
     .catch( err => console.log( "Error: ", err )
     )
  }

    editProduct = (prodId) => {
      console.log("Edit Card in App");
      const prodData = this.state.inventory.find( e => { 
        return e.id === prodId;
      })
      console.log("Product Found: ", prodData)
      this.setState( { prodToEdit: prodData } )
    }

  render() {
    //this.getAllInventory();
    return (
      <div className="App-Main">
        <Header/>
        <main className="main-container">
          <Form
            addProduct = {this.addProduct}
            prodToEdit = {this.state.prodToEdit}
          />
          <Dashboard
            currInventory = {this.state.inventory}
            getAllInventory = {this.getAllInventory}
            deleteProduct = {this.deleteProduct}
            editProduct = {this.editProduct}
          />
        </main>
      </div>
    ); //End Return
  } //End Render
} //End App

export default App;
