const shortid = require('shortid')
const Url = require('../models/url')

const shortUrlGen = async (req, res) => {
    const { url } = req.body
    if (!url) {
        return res.status(400).json({ error: 'Url required' })
    }
    const shortUrl = shortid(8)
    const response = await Url.create({ shortUrl, fullUrl: url })
    return res.status(201).json(response)
}

const redirectt = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const response = await Url.findOne({ shortUrl: id })
    if (!response) {
        return res.status(404).json({ error: 'Page not found' })
    }
    res.redirect(response.fullUrl)
}

module.exports = { shortUrlGen, redirectt }