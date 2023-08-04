// Importamos el modulo de express
const express = require('express');
// Nos permitira trabajar co el body de la peticion de forma sencilla
const bodyParser = require('body-parser');
// Nos permitira trabajar con rutas
const router = express.Router();

// Incializamos nuestro express
var app = express();
// Añadimos router a nuestro servidor nuestras librerias
app.use(bodyParser.json()); // Indicamos que trabajeremos con json
app.use(router);

// Indicamos nuestra ruta para el metodo get
router.get('/message', function(req, res) {
    res.send('Aqui esta tu lista de mensajes');
});

// Indicamos nuestra ruta para el metodo post
router.post('/message', function(req, res) {
    console.log(req.body); // accedemos a los parametros del body
    console.log(req.query) // accedemos a los parametros del query
    res.send('Se ha aregado tu mensaje ' + req.body.text);
});


app.listen('3000');
console.log('La aplicacion esta escuchando en http://localhost:3000');