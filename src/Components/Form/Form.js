// Import Dependencies
import React, {Component} from 'react';
import axios from 'axios';

// Import Components

// Import CSS Files

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
      imgurl: "./blankimage.png"
    } // End this.state

    


  } // End Constructor

  // componentDidMount() {
  //   //console.log('Form CompDidMount Called');
  // }

  handleImageUpdate = () => {
    let imgurlInputTemp = document.getElementById("imgurl").value;
    this.setState( { imgurl: imgurlInputTemp } );
  }

  // Add Method to Handle Change (One for each Input)
  handleInput = () => {
    let imgurlInput = document.getElementById("imgurl").value;
    let prodNameInput = document.getElementById("prodName").value;
    let priceInput = document.getElementById("price").value;

    this.setState( {
      name: prodNameInput,
      price: priceInput,
      imgurl: imgurlInput
    } );

    console.log("ImgURL: ", imgurlInput);
    console.log("prodName: ", prodNameInput);
    console.log("price: ", priceInput);
  }

  // Add Method to POST new products to database

  // Add Method to Clear Input Boxes
  handleCancel = () => {
    this.setState( {
      name: "",
      price: "",
      imgurl: "./blankimage.png"
    } );
    document.getElementById("imgurl").value = "";
    document.getElementById("prodName").value = "";
    document.getElementById("price").value = "";
    console.log("Cancel Clicked", this.state);
  }

  render() {
    return (
      <div className="Form-Main">
          <div className="form image-container">
            <img id="form-image" src={this.state.imgurl} alt="Can not find image"/>
          </div>
          <div className="form form-input-container">
            <label className="form-label">Image URL:</label>
            <input className="form-input" type="text" id="imgurl" onChange={this.handleImageUpdate} ></input>
            <label className="form-label" >Product Name:</label>
            <input className="form-input" type="text" id="prodName"></input>
            <label className="form-label" >Price:</label>
            <input className="form-input" type="text" id="price"></input>
          </div>
          <div className="form-button-container">
            <button className="form-buttons" onClick={this.handleCancel} >Cancel</button>
            <button className="form-buttons" onClick={this.handleInput} >Add to Inventory</button>
          </div>
      </div>
    ); //End Return
  } //End Render
} //End App

export default Form;