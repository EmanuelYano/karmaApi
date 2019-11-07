// livroModel.js
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
// Setup schema
var livroSchema = mongoose.Schema({
    nome_livro: {
        type: String,
        required: true
    },
    imageData: { type: String, required: false},
    subtitulo: {
        type: String,
        required: true
    },
    sinopse:{ type:String, required:true}, 
    autor: String,
    editora: { type:String, required:true},
    n_paginas: Number,
    n_disp: Number,
    categoria: String,
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