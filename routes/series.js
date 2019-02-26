const express = require('express')

const seriesController = require('../controllers/series')
const Serie = require('../models/serie')

const router = express.Router()
const models = {
    Serie
}

router.get('/', seriesController.index.bind(null, models))
router.post('/nova', seriesController.novaProccess.bind(null, models))
router.get('/nova', seriesController.novaForm)

module.exports = router
