
module.exports = {
    getAllInventory: async (req, res) => {
        console.log("---API Call GET All Inventory---");
        res.header("Content-Type",'application/json');
        const db = req.app.get('db')
        await db.get_inventory().then( data => {
            res.status(200).send( data )
        } )
        .catch(err => {
            res.status(500).send({ errorMessage: "Error Getting Products" });
            console.log(err)
        });
    },

    addProduct: async (req, res) => {
        console.log("---API Call Add Product Inventory---");
        const db = req.app.get('db');
        let { name, price, imgurl } = req.body;
        await db.add_product( [ name, price, imgurl ] )
        .then( data => {
            res.status(200).send( data )
        } )
        .catch(err => {
            res.status(500).send({ errorMessage: "Error Adding Product" });
            console.log(err)
        });

    },
    deleteProduct: async (req, res) => {
        console.log("---API Call Delete Product---");
        const db = req.app.get('db');
        const { id } = req.params;
        await db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({ errorMessage: "Error Deleting Product" });
            console.log(err)
        });
    },

    updateProduct: (req, res) => {

    }
}