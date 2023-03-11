const express = require('express');
const app = express()
const path = require('path');
const PORT = process.env.PORT || 4000;

// se sirven archivos estaticos desde 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Indica que usaremos EJS como motor de plantillas
app.set('view engine', 'ejs'); 

app.use(express.urlencoded({ extended: true }));
// Rutas de cartones
const cartonesRoute = require('./routes/cartonesRoute');

//Rutas de plantillas
const indexRouter = require('./routes/index');

// Se utiliza el router de cartones
app.use('/cartones', cartonesRoute);
app.use('/', indexRouter);


app.listen(PORT,()=>{
    console.log(`Servidor sacando chispas en el puerto ${PORT}`)
})
