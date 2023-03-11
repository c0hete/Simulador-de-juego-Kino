const cartones = [];
ganadores = [];
function mostrarFormularioCrear(req, res) {
  res.render('listado', { cartones });
}

// Controlador para crear un nuevo cartón
function crearCarton(req, res) {
    const numerosCarton = [];
    let coincidencias = 0;
    for (let i = 0; i < numerosCarton.length; i++) {
      if (ganadores.includes(numerosCarton[i])) {
        coincidencias++;
      }
    }
    // Generar números aleatorios sin repetir para el nuevo cartón
    while (numerosCarton.length < 15) {
      const num = Math.floor(Math.random() * 30) + 1;
      if (!numerosCarton.includes(num)) {
        numerosCarton.push(num);
      }
    }
  
    // Generar número de serie aleatorio
    const serie = Math.floor(Math.random() * 1000000) + 1;
  
    // Si el arreglo de cartones está vacío, generar 5 cartones
    if (cartones.length === 0) {
      for (let i = 0; i < 5; i++) {
        const numerosCarton = [];
  
        while (numerosCarton.length < 15) {
          const num = Math.floor(Math.random() * 30) + 1;
          if (!numerosCarton.includes(num)) {
            numerosCarton.push(num);
          }
        }
  
        const serieCarton = Math.floor(Math.random() * 1000000) + 1;
        cartones.push({ serie: serieCarton, numeros: numerosCarton });
      }
    }
    // Si ya hay cartones creados, generar solo 1 cartón
    else {
      cartones.push({ serie, numeros: numerosCarton });
    }
  
    // Generar los 15 números ganadores
    while (ganadores.length < 15) {
      const num = Math.floor(Math.random() * 30) + 1;
      if (!ganadores.includes(num)) {
        ganadores.push(num);
      }
    }
  
    // Redirigir al listado de cartones y pasar los cartones y los números ganadores
    res.render('listado', { cartones, ganadores });
  }

// Controlador para mostrar el listado de cartones
function mostrarListado(req, res) {
    // If no cartones have been created, redirect to the create form
    if (cartones.length === 0) {
      res.redirect('/cartones/listado');
    }
    else {
      // Get the latest set of ganadores from the cartones array, if it exists
      const latestGanadores = cartones[cartones.length - 1].ganadores || [];
  
      // Render the listado view, passing the cartones and latest ganadores
      res.render('listado', { cartones, ganadores: latestGanadores });
    }
  }

  function resetearCartones(req, res) {
    // Vaciar el arreglo de cartones y de ganadores
    cartones.length = 0;
    ganadores.length = 0;
  
    // Redirigir al formulario de creación de cartones
    res.redirect('/cartones/crear');
  }

module.exports = { mostrarFormularioCrear, crearCarton, mostrarListado, resetearCartones };