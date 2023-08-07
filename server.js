// Importamos el modulo de express
const express = require('express');
// Nos permitira trabajar co el body de la peticion de forma sencilla
const bodyParser = require('body-parser');

// Hacemos referenciaa nuestro roouter de nuestro network, donde definirremos las rutas de neurta app
const router = require('./network/routes');

// Incializamos nuestro express
var app = express();
// Añadimos router a nuestro servidor nuestras librerias
app.use(bodyParser.json()); // Indicamos que trabajeremos con json

// A nuestro router, le mandamos el server que tenemos para que se le añadan las rutas
router(app);

// Asi servimos archivos estaticos
// La ruta en la que queremos que se visualice, y que carpeta queremos servir
app.use("/app", express.static('public'));

app.listen('3000');
console.log('La aplicacion esta escuchando en http://localhost:3000');