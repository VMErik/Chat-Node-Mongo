// Importamos express
const express = require('express');
// Importamos nuestras rutas de message
const message = require('../components/message/network')

// Recibimos nuestro server y le añadimos las rutas especificadas en el componente
const routes = function(server) {
    server.use('/message', message)
}

module.exports = routes;