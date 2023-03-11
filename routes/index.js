const express = require('express');
const router = express.Router();

// Middleware para el manejo de formularios
router.use(express.urlencoded({ extended: true }));

router.get('/', function(req, res) {
    const data = {
      title: 'Darth Kino',
      message: '¡Atrevete a ganar!'
    };
    res.render('index', data);
  });

  // Exportar el router
module.exports = router;