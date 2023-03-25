const express = require( 'express'); //importing express
const app = express(); //creates an instance of the Express application framework.
const port = 2000; //setting the port that express application will listen to
const data = require("./data") //importing data from the data.js file


//a route for the "/info" endpoint using the app.get() method. When a GET request is received for this endpoint, the server will respond with a 201 status code and send the data imported from "data.js" as the response body.
app.get("/info", (req, res) =>{
    

    res.status(201).send(data)

   /* res.status(201).json({ message: "data sent",
login: true,
data:data})*/ //multiple request will throw an error
})

app.listen(port, () => {
    console.log("Server has been started on port 3000")
})
