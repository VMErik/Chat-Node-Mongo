// Importamos el modulo de express
const express = require('express');
// Nos permitira trabajar co el body de la peticion de forma sencilla
const bodyParser = require('body-parser');
// Nos permitira trabajar con rutas
const router = express.Router();

// Importamos nuestro modulo de respuestas
const response = require('./network/response');

// Incializamos nuestro express
var app = express();
// Añadimos router a nuestro servidor nuestras librerias
app.use(bodyParser.json()); // Indicamos que trabajeremos con json
app.use(router);

// Asi servimos archivos estaticos
// La ruta en la que queremos que se visualice, y que carpeta queremos servir
app.use("/app", express.static('public'));

// Indicamos nuestra ruta para el metodo get
router.get('/message', function(req, res) {
    console.log(req.headers); // Incluye las cabeceras
    res.header({ "custom-header": "Nuestro valor personalizado" }); // Podemos enviar headers dentro de las respuestas
    // Llamamos a nuestro modulo
    response.success(req, res, 'Lista de mensajes');
});

// Indicamos nuestra ruta para el metodo post
router.post('/message', function(req, res) {
    // Simulamos un error
    if (req.query.error == "ok") {
        // Mandamos a llamar a nuestra respuesta coherente de errores
        // Mandaos el status, y mandamos en el parametro details la informacion del error
        response.error(req, res, "Error inesperado", 500, "Es solo una simulacion de los errores");
    } else {
        response.success(req, res, "Creado correctamente");
    }
});

router.delete('/message', function(req, res) {
    console.log(req.body); // accedemos a los parametros del body
    console.log(req.query) // accedemos a los parametros del query
        // res.send('Se ha eliminado tu mensaje ' + req.body.text);
    response.success(req, res, "Se ha eliminado tu mensaje " + req.body.text)
});

app.listen('3000');
console.log('La aplicacion esta escuchando en http://localhost:3000');