// reservaController.js
// Import reserva model
Reserva = require('../model/reservaModel.js');
// // Listar os usuários
// exports.index = function (req, res) {
//     Reserva.get(function (err, reservas) {
//         if (err) {
//             res.json({
//                 situacao: "error",
//                 mensagem: err,
//             });
//         }
//         res.json({
//             situacao: "success",
//             mensagem: "Usuários listados com sucesso",
//             dados: reservas
//         });
//     });
// };
// Criar reserva
exports.new = function (req, res) {
    var reserva = new Reserva();
    reserva.livro = req.body.livro;
    reserva.usuario = req.body.usuario;
    // salvar reservas e verificação de erros
    reserva.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            mensagem: 'Nova reserva cadastrada!',
            dados: reserva
        });
    });
};
// Handle view reserva info
exports.view = function (req, res) {
    Reserva.findById(req.params.reserva_id, function (err, reserva) {
        if (err)
            res.send(err);
        res.json({
            mensagem: 'Dados do reserva',
            dados: reserva
        });
    });
};
// Atualizar reservas
exports.update = function (req, res) {
    console.log(JSON.stringify(req.body))
    Reserva.findByIdAndUpdate(req.body._id,req.body, function (err, reserva) {
            if (err)
                res.json(err);
            res.json({
                mensagem: 'Reserva atualizado',
                dados: reserva
            });
        });
};
// deletar reserva
exports.delete = function (req, res) {
    Reserva.remove({
        _id: req.params.reserva_id
    }, function (err, reserva) {
        if (err)
            res.send(err);
        res.json({
            situacao: "sucesso",
            mensagem: 'Reserva deletado',
            reserva
        });
    });
};
//livro
exports.viewByLivro = function (req, res){
    console.log(req.params.livro)
    Reserva.count({livro:req.params.livro}, function (err, reserva) {
        console.log(reserva)
        if (err)
            res.send(err);
        res.json({
            reserva
        });
    });
}

//usuario
exports.viewByUsuario = function (req, res){
    console.log(req.params.usuario)
    Reserva.count({usuario:req.params.usuario}, function (err, reserva) {
        console.log(reserva)
        if (err)
            res.send(err);
        res.json({
            reserva
        });
    });
    
}