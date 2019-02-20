const mongoose = require('mongoose')

const SerieSchema = mongoose.Schema({
    name: String,
    status: {
        type: String,
        enumValues: [ 'to-watch', 'watching', 'watched' ] 
    },
    coments: [String]
})

const Serie = mongoose.model('Serie', SerieSchema)

module.exports = Serie