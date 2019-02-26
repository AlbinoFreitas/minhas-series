const index = ({ Serie }, req, res) => {
    Serie.find({}).then(docs => {
        res.render('series/index', { series: docs })
    }).catch(err => {
        res.render('error', { err })
    })
}

const novaForm = (req, res) => {
    res.render('series/nova')
}

const novaProccess = ({ Serie }, req, res) => {
    const serie = new Serie(req.body)

    serie.save().then(() => {
        res.redirect('/series')
    })
}

module.exports = {
    index, novaForm, novaProccess
}