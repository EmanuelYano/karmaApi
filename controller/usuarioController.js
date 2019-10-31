// usuarioController.js
// Import usuario model
Usuario = require('../model/usuarioModel.js');
// Listar os usuários
exports.index = function (req, res) {
    Usuario.get(function (err, usuarios) {
        if (err) {
            res.json({
                situacao: "error",
                mensagem: err,
            });
        }
        res.json({
            situacao: "success",
            mensagem: "Usuários listados com sucesso",
            dados: usuarios
        });
    });
};
// Criar usuários
exports.new = function (req, res) {
    var usuario = new Usuario();
    usuario.nome = req.body.nome ? req.body.nome : usuario.nome;
    usuario.codigo = req.body.codigo;
    usuario.email = req.body.email;
    usuario.senha = req.body.senha;
    usuario.telefone = req.body.telefone;
    usuario.serie - req.body.serie;
    // salvar usuarios e verificação de erros
    usuario.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            mensagem: 'Novo usuário cadastrado!',
            dados: usuario
        });
    });
};
// Handle view usuario info
exports.view = function (req, res) {
    Usuario.findById(req.params.usuario_id, function (err, usuario) {
        if (err)
            res.send(err);
        res.json({
            mensagem: 'Dados do usuario',
            dados: usuario
        });
    });
};
// Atualizar usuarios
exports.update = function (req, res) {
Usuario.findById(req.params.usuario_id, function (err, usuario) {
        if (err)
            res.send(err);
        usuario.nome = req.body.nome ? req.body.nome : usuario.nome;
        usuario.codigo = req.body.codigo;
        usuario.email = req.body.email;
        usuario.telefone = req.body.telefone;
        usuario.senha = req.body.senha;
        usuario.serie - req.body.serie;
        // salvar e verificar erros
        usuario.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                mensagem: 'Usuario atualizado',
                dados: usuario
            });
        });
    });
};
// deletar usuario
exports.delete = function (req, res) {
    Usuario.remove({
        _id: req.params.usuario_id
    }, function (err, usuario) {
        if (err)
            res.send(err);
        res.json({
            situacao: "sucesso",
            mensagem: 'Usuario deletado',
            usuario
        });
    });
};
//verificar email cadastrado
exports.verDupli = function(req, res){
    console.log(req.params)
    Usuario.findOne({email:req.body.email}, function(err, usuario){
        console.log(usuario)
        if (err)
            res.send(err);
        res.json({
            usuario
        });
    });

};

//logar
exports.logar = function (req, res) {
    console.log(req.params)
    Usuario.findOne({email:req.body.email, senha:req.body.senha}, function (err, usuario) {
        console.log(usuario)
        if (err)
            res.send(err);
        res.json({
            usuario
        });
    });
};