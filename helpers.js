const helpers = require('../helpers');

// ...

router.get('/listado', (req, res) => {
  // ...

  const ganadores = req.app.locals.ganadores;
  const cartones = req.app.locals.cartones;

  res.render('listado', { ganadores, cartones, coincidencias: helpers.coincidencias });
});
