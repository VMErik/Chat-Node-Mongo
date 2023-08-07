// Se encarga de recibir la peticion http, procesar informacion y enviarla al controlador
const express = require('express');
// Importamos nuestro modulo de respuestas
const response = require('../../network/response');

// Importamos el controlador
const controller = require('./controller')

// Importamos router para trabajar con las rutas
const router = express.Router();

// Indicamos nuestra ruta para el metodo get
router.get('/', function(req, res) {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((error) => {
            response.error(req, res, "Unexpected Error", 500, error);
        });
});

// Indicamos nuestra ruta para el metodo post
router.post('/', function(req, res) {
    // Llamamos a nuestro controladdor y pasamos lo que viene en el body
    controller.addMessage(req.body.user, req.body.message)
        .then((mensaje) => {
            response.success(req, res, mensaje, 201);
        })
        .catch((error) => {
            response.error(req, res, error, 400, "Error en el controlador");
        })
});

router.delete('/', function(req, res) {
    console.log(req.body); // accedemos a los parametros del body
    console.log(req.query) // accedemos a los parametros del query
        // res.send('Se ha eliminado tu mensaje ' + req.body.text);
    response.success(req, res, "Se ha eliminado tu mensaje " + req.body.text)
});


// Exportamos todo lo que contenga nuestro router para poder ser accedido desde cualquier sitio
module.exports = router;