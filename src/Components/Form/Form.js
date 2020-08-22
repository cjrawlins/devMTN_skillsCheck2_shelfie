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
      imgurl: "",
      oldProdToEdit: {},
      editing: false
    }
  } 

  toggleSaveOrEdit = () => {
    console.log("Toggle Called State Before Editing: ", this.state.editing);
    if (this.state.editing) {
      this.checkUpdate();
      this.setState( { editing: false } );

    } else {
      this.handleCancel();
      this.setState( { editing: true } );

    }
  }

  checkUpdate = () => {
    if (this.state.editing) {

    } else {

    }

    this.populateDataToEdit();
    this.setState( { editing: true } ) 
  }

  saveNewProduct = (props) => {
    console.log("Add to Inventory Clicked");
    const { name, price, imgurl } = this.state;
    console.log("Sending: ", { name, price, imgurl });
    this.props.addProduct(name, price, imgurl);
    this.props.updateForce();
  }


  sendCardEdit =(props) => {
    console.log(`Old Prod: `, this.state.oldProdToEdit );
    console.log(`Props Prod: `, this.props.prodToEdit );
    if (this.state.id !== 0 && this.state.oldProdToEdit !== this.props.prodToEdit) {
      console.log("Sending Product Edit");
      const prodData = { 
        id: this.state.id,
        name: this.state.name,
        imgurl: this.state.imgurl,
        price: this.state.price
     }
    const prodId = prodData.id;
    axios.put(`/api/inventory/${prodId}`, prodData)
    this.setState( { oldProdToEdit: this.props.prodToEdit } )
    this.props.getAllInventory();
    this.handleCancel();
    this.props.updateForce();
    }

  }

  populateDataToEdit = () => {
    if (this.props.prodToEdit !== null) {
      const { id, name, price, imgurl } = this.props.prodToEdit;
      this.setState( {
        id,
        name,
        price,
        imgurl
      } )
      }
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  // Add Method to Clear Input Boxes
  handleCancel = () => {
    this.setState( {
      name: "",
      price: "",
      imgurl: ""
    } );
  }

  render() {
    return (
      <div className="Form-Main">
            {this.state.editing ? 
            <div className="form-top-toggle-container">
              <button className="form-toggle-buttons" onClick={this.toggleSaveOrEdit}>Create</button>
              <button className="form-toggle-buttons" style={{backgroundColor: 'white'}} onClick={this.checkUpdate}>Edit</button>
            </div>
            :
            <div className="form-top-toggle-container">
              <button className="form-toggle-buttons" style={{backgroundColor: 'white'}}  onClick={this.handleCancel}>Create</button>
              <button className="form-toggle-buttons" onClick={ this.toggleSaveOrEdit }>Edit</button>
            </div>
            }
          <div className="form image-container">
            <img id="form-image" src={this.state.imgurl} alt="#"/>
          </div>
          <div className="form form-input-container">
            <label className="form-label">Image URL:</label>
            <input className="form-input" type="text" name="imgurl" value={this.state.imgurl} onChange={ e => this.handleInput(e)}/>
            <label className="form-label" >Product Name:</label>
            <input className="form-input" type="text" name="name" value={this.state.name} onChange={ e => this.handleInput(e)}/>
            <label className="form-label" >Price:</label>
            <input className="form-input" type="text" name="price" value={this.state.price} onChange={ e => this.handleInput(e)}/>
          </div>
          {this.state.editing ?
          <div className="form-button-container">
            <button className="form-buttons" onClick={this.handleCancel} >Cancel</button>
            <button className="form-buttons" onClick={this.sendCardEdit} >Save Edit</button>
            <button className="form-buttons" onClick={this.checkUpdate} >Update to New Edit</button>
          </div>
          :
          <div className="form-button-container">
            <button className="form-buttons" onClick={this.handleCancel} >Cancel</button>
            <button className="form-buttons" onClick={this.saveNewProduct} >Add to Inventory</button>
          </div>
          }
      </div>
    ); //End Return
  } //End Render
} //End App

export default Form;