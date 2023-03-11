const generarCarton = () => {
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

  // Retornar el nuevo cartón
  return { serie, numeros };
};

const cartones = [];

const crearCarton = () => {
  const carton = generarCarton();

  // Agregar cartón al arreglo
  cartones.push(carton);

  // Retornar el nuevo cartón
  return carton;
};

const listarCartones = () => {
  // Retornar el arreglo de cartones
  return cartones;
};

const resetearCartones = () => {
  // Vaciar el arreglo de cartones
  cartones.length = 0;
};

// Exportar las funciones del controlador
module.exports = {
  crearCarton,
  listarCartones,
  resetearCartones,
};
