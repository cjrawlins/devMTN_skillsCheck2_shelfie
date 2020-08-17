// Import Dependencies
import React from 'react';
import axios from 'axios';


// Import Components
import Product from '../Product/Product';

// Import CSS Files

function Dashboard(props) {

    function deleteProduct(prodId) {
        console.log("Delete Card in Dash. Card: ", prodId);
        axios.delete(`/api/inventory/${prodId}`)
          .catch( err => console.log( "Error: ", err ))
          props.getAllInventory();
      }

    console.log("Inventory Dashboard", props.currInventory);
    const productMap = props.currInventory.map( function( curr, index ) {
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
            {productMap}
        </div>
    ); // End Return

} // End Header

export default Dashboard;