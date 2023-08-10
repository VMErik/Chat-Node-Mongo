// Importamos express
const express = require('express');
// Importamos nuestras rutas de message
const message = require('../components/message/network')
const user = require('../components/user/network')
const chat = require('../components/chat/network')

// Recibimos nuestro server y le añadimos las rutas especificadas en el componente
const routes = function(server) {
    server.use('/message', message),
        server.use('/user', user),
        server.use('/chat', chat)

}

module.exports = routes;