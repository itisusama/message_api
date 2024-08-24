const express = require("express")
const {createMessage, getMessage} = require("../controllers/MessagesController")

const router = express.Router()

router.get("/", getMessage)

// router.get("/", (req, res) => {
//     res.json({message: "Hello"})
// })

router.post("/", createMessage)

module.exports = router