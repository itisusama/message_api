const Messages = require('../models/MessagesModel')

// Get all
const getMessage = async (req, res) => {
        const messages = await Messages.find({}).sort({createdAt:-1})
        res.status(200).json(messages)
}
// Create
const createMessage = async(req, res) => {
    const {name, message} = req.body
    try {
        const messages = await Messages.create({name, message})
        res.status(200).json(messages)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createMessage, getMessage
}