// Modulo para hacer uso de respuestas coherentes
// Con el fin de que nuestras respuestas tengan la misma estructura
exports.success = function(req, res, message, status = 200) {
    // Definimos nuestra respuesta personalizada
    res.status(status).send({
        error: '',
        body: message
    });
}


exports.error = function(req, res, error, status = 500) {
    // Definimos nuestra respuesta personalizada
    res.status(status).send({
        error: error,
        body: ''
    });
}