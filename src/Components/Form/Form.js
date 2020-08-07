// Import Dependencies
import React, {Component} from 'react';

// Import Components

// Import CSS Files

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    } // End this.state

  } // End Constructor

  componentDidMount() {
    console.log('Form CompDidMount Called');
  }

  // Add Method to Handle Change (One for each Input)

  // Add Method to POST new products to database

  // Add Method to Clear Input Boxes

  render() {
    return (
      <div className="Form-Main">
          <h1>Form</h1>
      </div>
    ); //End Return
  } //End Render
} //End App

export default Form;