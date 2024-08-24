// require('dotenv').config()
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const messages = require("./api/routes/messages")

const app = express()
// Enable CORS for all routes
app.use(cors());
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})
// Request Handeling
app.use('/api/message', messages);

mongoose.connect("mongodb+srv://itisusama:UH123ook@messageapp.r79n5.mongodb.net/?retryWrites=true&w=majority&appName=MESSAGEapp")
.then(() => {
    app.listen(3001, () => {
        console.log(`The app listening on port ${3001}`)
    })
}).catch((error) => {console.error(error)})