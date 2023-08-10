// Se encarga de recibir la peticion http, procesar informacion y enviarla al controlador
const express = require('express');
// Importamos nuestro modulo de respuestas
const response = require('../../network/response');

// Importamos el controlador
const controller = require('./controller')

// Importamos router para trabajar con las rutas
const router = express.Router();


router.get('/', (req, res) => {
    controller.list()
        .then((respuesta) => {
            response.success(req, res, respuesta, 200)
        })
        .catch((error) => {
            response.error(req, res, "Internal error", 500, error);
        });
});



router.post('/', (req, res) => {
    controller.add(req.body.users)
        .then((respuesta) => {
            response.success(req, res, respuesta, 201)
        })
        .catch((error) => {
            response.error(req, res, "Internal error", 500, error);
        });
});

module.exports = router;