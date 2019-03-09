const express = require('express')

const seriesController = require('../controllers/series')
const Serie = require('../models/serie')

const router = express.Router()
const models = {
    Serie
}

router.get('/', seriesController.index.bind(null, models))

router.get('/nova', seriesController.novaForm)
router.post('/nova', seriesController.novaProccess.bind(null, models))

router.get('/editar/:id', seriesController.editaForm.bind(null, models))
router.post('/editar/:id', seriesController.editaProccess.bind(null, models))

router.get('/excluir/:id', seriesController.excluir.bind(null, models))

router.get('/info/:id', seriesController.info.bind(null, models))
router.post('/info/:id', seriesController.addComentario.bind(null, models))

module.exports = router
