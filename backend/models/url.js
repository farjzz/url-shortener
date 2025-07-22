const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
    shortUrl: {
        type: String,
        required: true
    },
    fullUrl: {
        type: String,
        required: true
    },
    visitHistory: [{ timestamp: { type: Number } }]
})

module.exports = mongoose.model('Url', urlSchema)