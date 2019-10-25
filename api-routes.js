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
    .post(usuarioController.new);
router.route('/usuarios/:usuario_id')
    .get(usuarioController.view)
    .patch(usuarioController.update)
    .put(usuarioController.update)
    .delete(usuarioController.delete);

// Import livro controller
var livroController = require('./controller/livroController');
// Livro routes
router.route('/livros')
    .get(livroController.index)
    .post(livroController.new);
router.route('/livros/:livro_id')
    .get(livroController.view)
    .patch(livroController.update)
    .put(livroController.update)
    .delete(livroController.delete);

//Logar
router.route('/logar')
    .post(usuarioController.logar);

// Export API routes
module.exports = router;