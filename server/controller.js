const dummyData = require('./dummyData.json');

module.exports = {
    getAllProducts: (req, res) => {
        console.log("---API Call GET All Inventory---");
        res.header("Content-Type",'application/json');
        const db = req.app.get('db')
        db.get_inventory().then( data => {
            res.status(200).send( data )
        } )
        

    },
    getProduct: (req, res) => {

    },
    addProduct: (req, res) => {

    }
}