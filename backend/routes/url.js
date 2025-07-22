const express = require('express')
const { shortUrlGen, redirectt } = require('../controllers/url')
const router = express.Router()
router.post('/', shortUrlGen)
router.get('/:id', redirectt)
module.exports = router
