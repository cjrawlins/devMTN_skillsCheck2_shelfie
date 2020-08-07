// Import Dependencies
import React from 'react';

// Import Components

// Import CSS Files

function Product(props) {
    
    // let cardData = {...props.cardInfo}

    // console.log(cardData);
    // // console.log(props.cardInfo.price);
    // console.log(props.cardData.imgurl);


    return (
        <div className="Product-Main">
            <div className="card-image-container">
                <img class="card-image" src="https://www.w3schools.com/css/paris.jpg" alt="Cannot Load Image" />
            </div>
            <div className="card-info">
                <h1>Name</h1>
                <h1>Price</h1>
                <div className="card-button-container">
                    <button className="card-buttons">Delete</button>
                    <button className="card-buttons">Edit</button>
                </div>
            </div>
        </div>
    ); // End Return

} // End Header

export default Product;