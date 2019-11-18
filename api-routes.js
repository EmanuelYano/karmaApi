//semelhante ao router.js do front
// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import usuario controller
var usuarioController = require('./controller/usuarioController');
// Usuario routes
router.route('/usuarios')
    .get(usuarioController.index)
    .put(usuarioController.update)//fazer igual nos outros
    .post(usuarioController.new);
router.route('/usuarios/:usuario_id')
    .get(usuarioController.view)
    .patch(usuarioController.update)    
    .delete(usuarioController.delete);
//Buscar usuario por email
router.route('/email')
    .post(usuarioController.verEmail)


// Import livro controller
var livroController = require('./controller/livroController');
// Livro routes
router.route('/livros')
    .get(livroController.index)
    .post(livroController.new)
    .put(livroController.update);
router.route('/livros/:livro_id')
    .get(livroController.view)
    .patch(livroController.update)
    .delete(livroController.delete);

// Import reserva controller
var reservaController = require('./controller/reservaController');
// Usuario routes
router.route('/reserva')
    //.get(reservaController.index)
    .put(reservaController.update)//fazer igual nos outros
    .post(reservaController.new);
router.route('/reserva/:reserva_id')
    .get(reservaController.view)
    .patch(reservaController.update)    
    .delete(reservaController.delete);
router.route('/reserva/livro/:livro')
    .get(reservaController.viewByLivro)
router.route('/reserva/usuario/:usuario')
    .get(reservaController.viewByUsuario)


//Logar
router.route('/logar')
    .post(usuarioController.logar);
//Duplicidade
router.route('/duplicidade')
    .post(usuarioController.verDupli);

// Export API routes
module.exports = router;