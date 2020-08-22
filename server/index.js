// Dependencies
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');

// Create instance app from express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Get Database connection info from .env
const { SERVER_PORT, CONNECTION_STRING } = process.env;

// Invoke massive database connector
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    }).then(dbInstance => {
        app.set('db', dbInstance);
        console.log('Connected to Database')
        })
        .catch( error => console.log(error));

// Endpoints
app.get('/api/inventory', ctrl.getAllInventory);
app.post('/api/inventory', ctrl.addProduct);
app.delete('/api/inventory/:id', ctrl.deleteProduct);
app.put('/api/inventory/:id', ctrl.updateProduct);

//Set up server to listen on port and log
app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
    });
