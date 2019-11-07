// livroController.js
// Import livro model
Livro = require('../model/livroModel.js');
// listar livros
exports.index = function (req, res) {
    Livro.get(function (err, livros) {
        if (err) {
            res.json({
                status: "erro",
                message: err,
            });
        }
        res.json({
            status: "sucesso",
            message: "Livros listados com sucesso",
            dados: livros
        });
    });
};
// criar livro
exports.new = function (req, res) {
    var livro = new Livro();
    livro.nome_livro = req.body.nome_livro ? req.body.nome_livro : livro.nome_livro;
    livro.imageData = req.body.imageData;
    livro.subtitulo = req.body.subtitulo;
    livro.sinopse = req.body.sinopse;
    livro.autor = req.body.autor;
    livro.editora = req.body.editora;
    livro.n_paginas = req.body.n_paginas;
    livro.n_disp = req.body.n_disp;
    //salvar livro e checar erro
    //console.log(JSON.stringify(livro))
    livro.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'Novo livro criado!',
            dados: livro
        });
    });
};
// visuzlizar informações livro 
exports.view = function (req, res) {
    Livro.findById(req.params.livro_id, function (err, livro) {
        if (err)
            res.send(err);
        res.json({
            message: 'Carregando detalhes do livro',
            dados: livro
        });
    });
};
// atualizar livro
exports.update = function (req, res) {
    Livro.findByIdAndUpdate(req.body._id,req.body, function (err, livro) {
            if (err)
                res.json(err);
            res.json({
                message: 'informação do livro atualizada',
                dados: livro
            });
        });
};
// deletar livro
exports.delete = function (req, res) {
    Livro.remove({
        _id: req.params.livro_id
    }, function (err, livro) {
        if (err)
            res.send(err);
res.json({
            status: "successo",
            message: 'Livro apagado'
        });
    });
};