const express = require('express');
const app = express()
const path = require('path');
const PORT = process.env.PORT || 4000;

// se sirven archivos estaticos desde 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Indica que usaremos EJS como motor de plantillas
app.set('view engine', 'ejs'); 

// Importar rutas de cartones
const cartonesRouter = require('./routes/cartones');

// Se utiliza el router de cartones
app.use('/cartones', cartonesRouter);



app.get('/', function(req, res) {
  const data = {
    title: 'Kino',
    message: '¡Atrevete a ganar!'
  };
  res.render('index', data);
});


app.listen(PORT,()=>{
    console.log(`Servidor sacando chispas en el puerto ${PORT}`)
})
