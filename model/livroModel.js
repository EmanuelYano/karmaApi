// livroModel.js
var mongoose = require('mongoose');
// Setup schema
var livroSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
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