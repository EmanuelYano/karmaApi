// livroController.js
// Import livro model
Livro = require('../model/livroModel');
// Handle index actions
exports.index = function (req, res) {
    Livro.get(function (err, livros) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Livros retrieved successfully",
            data: livros
        });
    });
};
// Handle create livro actions
exports.new = function (req, res) {
    var livro = new Livro();
    livro.name = req.body.name ? req.body.name : livro.name;
    livro.gender = req.body.gender;
    livro.email = req.body.email;
    livro.phone = req.body.phone;
// save the livro and check for errors
    livro.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New livro created!',
            data: livro
        });
    });
};
// Handle view livro info
exports.view = function (req, res) {
    Livro.findById(req.params.livro_id, function (err, livro) {
        if (err)
            res.send(err);
        res.json({
            message: 'Livro details loading..',
            data: livro
        });
    });
};
// Handle update livro info
exports.update = function (req, res) {
Livro.findById(req.params.livro_id, function (err, livro) {
        if (err)
            res.send(err);
livro.name = req.body.name ? req.body.name : livro.name;
        livro.gender = req.body.gender;
        livro.email = req.body.email;
        livro.phone = req.body.phone;
// save the livro and check for errors
        livro.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Livro Info updated',
                data: livro
            });
        });
    });
};
// Handle delete livro
exports.delete = function (req, res) {
    Livro.remove({
        _id: req.params.livro_id
    }, function (err, livro) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Livro deleted'
        });
    });
};