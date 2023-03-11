const express = require('express');
const router = express.Router();
const cartonesController = require('../controllers/cartonesController');

// Ruta para mostrar el formulario de creación de cartones
router.get('/crear', cartonesController.mostrarFormularioCrear);

// Ruta para crear un nuevo cartón
router.post('/crear', cartonesController.crearCarton);

// Ruta para mostrar el listado de cartones
router.get('/listado', cartonesController.mostrarListado);

router.post('/resetear', cartonesController.resetearCartones);

module.exports = router;
