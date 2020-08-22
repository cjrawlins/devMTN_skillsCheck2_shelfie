// Import Dependencies
import React from 'react';
import axios from 'axios';


// Import Components
import Product from '../Product/Product';

// Import CSS Files

function Dashboard(props) {

    function deleteProduct(prodId) {
        axios.delete(`/api/inventory/${prodId}`)
          .catch( err => console.log( "Error: ", err ))
          props.getAllInventory();
      }
    

    let productMap = props.currInventory.map( function( curr, index ) {
        return (
            <Product 
                key={index}
                name={curr.name}
                price={curr.price}
                id = {curr.id}
                imgurl = {curr.imgurl}
                editProduct = {props.editProduct}
                deleteProduct = {deleteProduct}
            />
        )
    } )

    return (
        <div className="Dashboard-Main">
            <div className="dash-refresh-button-container">
                <button className="dash-refresh-button" onClick={props.updateForce}>Update</button>
            </div>
            {productMap}
        </div>
    ); // End Return

} // End Header

export default Dashboard;