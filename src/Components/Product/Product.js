// Import Dependencies
import React from 'react';

// Import Components

// Import CSS Files

function Product(props) {

    function editProduct() {
        const prodId = props.id;
        console.log("Edit Product in Product: ", prodId);
        props.editProduct(prodId);
    }
    function deleteProduct() {
        const prodId = props.id;
        console.log("Delete Product in Product: ", prodId);
        props.deleteProduct(prodId);
    }

    return (
        <div className="Product-Main">
            <div className="card-image-container">
                <img className="card-image" src={props.imgurl} alt="#" />
            </div>
            <div className="card-info">
                <h1>{`Name: ${props.name}`}</h1>
                <h1>{`Price: $${props.price}.00`}</h1>
                <h1>{`Product ID: ${props.id}`}</h1>
                <div className="card-button-container">
                    <button className="card-buttons" onClick={deleteProduct}>Delete</button>
                    <button className="card-buttons" onClick={editProduct}>Edit</button>
                </div>
            </div>
        </div>
    ); // End Return

} // End Header

export default Product;