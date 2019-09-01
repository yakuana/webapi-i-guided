// require the express npm module
const express = require('express');

// creates an express application
const server = express();

// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
server.get('/', (req, res) => {
    
    // the .send() on the response object can be used to send a response to the client
    res.send('Hello World');
});

server.get('/hobbits', (req, res) => {

    // create a list of hobbits 
    const hobbits = [
        {
            id: 1, 
            name: 'Samwise Gamgee'
        }, 
        {
            id: 2, 
            name: 'Frodo Baggins'
        }
    ];
    
    // returns json api 
    res.status(200).json(hobbits);
})

// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(8000, () => console.log('API running on port 8000'));

