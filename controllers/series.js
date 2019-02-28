const labels = [
    { id: 'to-watch', name: 'Para assistir'},
    { id: 'watching', name: 'Assistindo'},
    { id: 'watched',  name: 'Assistido'}
]

const index = async ({ Serie }, req, res) => {
    const series = await Serie.find({})
    res.render('series/index', { series, labels })
}

const novaForm = (req, res) => {
    res.render('series/nova', { errors: null})
}

const novaProccess = async ({ Serie }, req, res) => {
    const serie = new Serie(req.body)
    
    try{
        await serie.save()
        res.redirect('/series')
    }catch(e){
        res.render('series/nova', { 
            errors: Object.keys(e.errors)
        })
    }

}

const editaForm = async ({ Serie }, req, res) => {
    const serie = await Serie.findOne({ _id: req.params.id })
    res.render('series/editar', { serie, labels , errors: null})
}

const editaProccess = async ({ Serie }, req, res) => {
    const serie     = await Serie.findOne({ _id: req.params.id })
    
    serie.name      = req.body.name
    serie.status    = req.body.status

    try{
        await serie.save()
        res.redirect('/series')
    }catch(e){
        res.render('series/editar', { 
            serie, 
            labels , 
            errors: Object.keys(e.errors)
        })
    }
}

const excluir = async ({ Serie }, req, res) => {
    await Serie.deleteOne({ _id: req.params.id })
    res.redirect('/series')
}

module.exports = {
    index, novaForm, novaProccess, editaForm, editaProccess, excluir
}