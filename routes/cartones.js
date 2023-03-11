const express = require('express');
const router = express.Router();

// Middleware para el manejo de formularios
router.use(express.urlencoded({ extended: true }));

// Arreglo que almacenará los cartones
const cartones = [];

// Ruta para mostrar el formulario de creación de cartones
router.get('/crear', (req, res) => {
  res.render('crear');
});

// Ruta para crear un nuevo cartón
router.post('/crear', (req, res) => {
  const numeros = [];

  // Generar números aleatorios sin repetir
  while (numeros.length < 15) {
    const num = Math.floor(Math.random() * 30) + 1;
    if (!numeros.includes(num)) {
      numeros.push(num);
    }
  }

  // Generar número de serie aleatorio
  const serie = Math.floor(Math.random() * 1000000) + 1;

  // Agregar cartón al arreglo
  cartones.push({ serie, numeros });

  // Redirigir al listado de cartones
  res.redirect('/cartones/listado');
});

// Ruta para mostrar el listado de cartones
router.get('/listado', (req, res) => {
  res.render('listado', { cartones });
});

// Exportar el router
module.exports = router;