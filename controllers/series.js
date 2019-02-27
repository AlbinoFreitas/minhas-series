const labels = [
    { id: 'to-watch', name: 'Para assistir'},
    { id: 'watching', name: 'Assistindo'},
    { id: 'watched',  name: 'Assistido'}
]

const index = ({ Serie }, req, res) => {
    Serie.find({}).then(series => {
        res.render('series/index', { series, labels })
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

const editaForm = ({ Serie }, req, res) => {
    Serie.findOne({ _id: req.params.id }, (err, serie) => {
        if(err){
            console.log(err)
        }
        res.render('series/editar', { serie, labels })
    })
}

const editaProccess = ({ Serie }, req, res) => {
    Serie.findOne({ _id: req.params.id }, (err, serie) => {
        if(err){
            console.log(err)
        }else{
            serie.name = req.body.name
            serie.status = req.body.status
            serie.save()
            res.redirect('/series')
        }
    })

}

const excluir = ({ Serie }, req, res) => {
    Serie.deleteOne({ _id: req.params.id }, (err) => {
        if(err){
            console.log(err)
        }
        res.redirect('/series')
    })
}

module.exports = {
    index, novaForm, novaProccess, editaForm, editaProccess, excluir
}