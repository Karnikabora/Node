const express = require( 'express'); //including express library to this file
const app = express(); //creates an instance of the Express application framework.
const port = 2000; //setting the port that express application will listen to
const data = require("./data") //importing data from the data.js file


//a route for the "/info" endpoint using the app.get() method. When a GET request is received for this endpoint, the server will respond with a 201 status code and send the data imported from "data.js" as the response body.
app.get("/info", (req, res) =>{
    

    res.status(201).send(data)

   /* res.status(201).json({ message: "data sent",
login: true,
data:data})*/ //sending data using json

//multiple request will throw an error
})


// following line listens on the defined port using the app.listen() method and logs a message to the console once the server has started.
app.listen(port, () => {
    console.log("Server has been started on port 2000")
})