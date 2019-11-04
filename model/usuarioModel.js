// usuarioModel.js
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
// Setup schema
var usuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    codigo: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    telefone: String,
    serie: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Usuario model
var Usuario = module.exports = mongoose.model('usuario', usuarioSchema);
module.exports.get = function (callback, limit) {
    Usuario.find(callback).limit(limit);
}
