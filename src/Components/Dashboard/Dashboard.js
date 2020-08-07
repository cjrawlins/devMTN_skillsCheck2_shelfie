// Import Dependencies
import React, {Component} from 'react';

// Import Components
import Product from '../Product/Product';

// Import CSS Files

function Dashboard(props) {

    const productMap = props.currInventory.map( function( curr, index ) {
        return (
            <Product 
                key={index}
                cardInfo={curr}
                // name={curr.name}
                // price={curr.price} 
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