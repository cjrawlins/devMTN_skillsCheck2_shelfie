// Import Dependencies
import React, {Component} from 'react';
import axios from 'axios';


class Form extends Component {
  constructor() {
    super()

    this.state = {
      id: null,
      name: "",
      price: 0,
      imgurl: "./blankimage.png",
      oldProdToEdit: {},
      editing: false
    } // End this.state

  } // End Constructor

  componentDidUpdate() {
    const prodData = this.props.prodToEdit;
    console.log("Product To Edit: ", prodData);
    console.log("Old Product To Edit: ", this.state.oldProdToEdit);
    if (this.props.prodToEdit !== this.state.oldProdToEdit) {
      console.log("CompDidUpdate ProdEdit are Not Equal. Editing: ", this.state.editing);
      //this.populateDataToEdit();

      // this.setState( { 
      //   id: prodData.id,
      //   name: prodData.name,
      //   price: prodData.price,
      //   imgurl: prodData.imgurl,
      //   editing: true
      //  } )
    } else {
      console.log("CompDidUpdate ProdEdit are Equal");
    }
    
  }

  saveOrEdit = () => {
    if (this.props.prodToEdit !== null) {
      this.saveNewProduct();
    } else {
      this.sendCardEdit();
    }
  }

  saveNewProduct = () => {
    console.log("Add to Inventory Clicked");
    let name = document.getElementById("prodName").value;
    let price = document.getElementById("price").value;
    let imgurl = document.getElementById("imgurl").value;
    //let { name, price, imgurl } = this.state;
    console.log("Sending: ", { name, price, imgurl });
    this.props.addProduct(name, price, imgurl);
  }
  // saveNewProduct = () => {
  //   console.log("Add to Inventory Clicked");
  //   let { name, price, imgurl } = this.state;
  //   console.log("Sending: ", { name, price, imgurl });
  //   this.props.addProduct(name, price, imgurl);
  // }

  sendCardEdit =() => {
    const prodData = {

    }
    const prodId = prodData.id;
    axios.put(`/api/inventory/${prodId}`, prodData);
  }

  populateDataToEdit = () => {
    console.log("Populate Data Called");
    if (this.props.prodToEdit !== null) {
      const prodData = this.props.prodToEdit;
      console.log("Product To Edit: ", prodData);
      // document.getElementById("imgurl").value = prodData.imgurl;
      // document.getElementById("prodName").value = prodData.name;
      // document.getElementById("price").value = prodData.price;
      this.setState( { 
        id: prodData.id,
        name: prodData.name,
        price: prodData.price,
        imgurl: prodData.imgurl,
        editing: true
       } )
      } else {
        console.log("No Product to Edit");
      }
  }

  handleImageUpdate = () => {
    let imgurlInputTemp = document.getElementById("imgurl").value;
    this.setState( { imgurl: imgurlInputTemp } );
  }

  // Add Method to Handle Change (One for each Input)
  handleInput = () => {
    // let imgurlInput = document.getElementById("imgurl").value;
    // let prodNameInput = document.getElementById("prodName").value;
    // let priceInput = document.getElementById("price").value;

    // this.setState( {
    //   name: prodNameInput,
    //   price: priceInput,
    //   imgurl: imgurlInput
    // } );

  }

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
            <img id="form-image" src={this.state.imgurl} alt="#"/>
          </div>
          <div className="form form-input-container">
            <label className="form-label">Image URL:</label>
            <input className="form-input" type="text" id="imgurl" onChange={this.handleImageUpdate}/>
            <label className="form-label" >Product Name:</label>
            <input className="form-input" type="text" id="prodName" onChange={this.handleInput}/>
            <label className="form-label" >Price:</label>
            <input className="form-input" type="text" id="price" onChange={this.handleInput}/>
          </div>
          <div className="form-button-container">
            <button className="form-buttons" onClick={this.handleCancel} >Cancel</button>
            <button className="form-buttons" onClick={this.saveOrEdit} >Add to Inventory</button>
          </div>
      </div>
    ); //End Return
  } //End Render
} //End App

export default Form;