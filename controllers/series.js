const Serie = require('../models/serie')

const index = (req, res) => {
    Serie.find({}).then(docs => {
        res.render('series/index', { series: docs })
    }).catch(err => {
        res.render('error', { err })
    })
}

const nova = (req, res) => {
    const serie = new Serie({
        name: 'Friends',
        status: 'watched'
    })

    serie.save().then(() => {
        console.log('saved')
    })
}

module.exports = {
    index, nova
}