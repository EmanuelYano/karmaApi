// reservaModel.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);
// Setup schema
var reservaSchema = mongoose.Schema({
    livro: {type: Schema.Types.ObjectId, ref: 'Livro', required: true},
    usuario: {type: Schema.Types.ObjectId, ref: 'Usuario', required: true},
    status: {type:String,default:'reservado'},
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Reserva model
var Reserva = module.exports = mongoose.model('reserva', reservaSchema);
module.exports.get = function (callback, limit) {
    Reserva.find(callback).limit(limit);
}