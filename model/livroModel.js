// livroModel.js
var mongoose = require('mongoose');
// Setup schema
var livroSchema = mongoose.Schema({
    nome_livro: {
        type: String,
        required: true
    },
    subtitulo: {
        type: String,
        required: true
    },
    sinopse:{ type:String, required:true}, 
    autor: String,
    editora: { type:String, required:true},
    n_pagina: Number,
    n_disp: Number,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Livro model
var Livro = module.exports = mongoose.model('livro', livroSchema);
module.exports.get = function (callback, limit) {
    Livro.find(callback).limit(limit);
}