const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const server = express();
const connectDB = require('./db');
const cors = require('cors');

//To allow cors requests. //FE-3000, BE-5000 ports.
server.use(cors());
//Middleware to parse JSON request body, so that data will be available in req.body
server.use(express.json());
//connectDB();

const PORT = process.env.PORT;

server.get("/", (req, res) => {
    res.end("Hello World");
});

server.get("/api/images", (req, res) => {
    const images = [{name: 'sample'}];
    res.json({images});
})

server.get("/api/apod", async (req, res) => {
    try {
        const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
        const apodJSON = await apod.json();
        console.log("apodJSON:::", apodJSON)
        res.json({ apod: apodJSON })
    } catch(e) {
        console.log("Error on /apod: ", e)
    }
})

server.listen(PORT, () => console.log("Server listen on ", PORT))