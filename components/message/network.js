// Se encarga de recibir la peticion http, procesar informacion y enviarla al controlador
const express = require('express');
// Para el manejo de archivos
const multer = require('multer');
// Importamos nuestro modulo de respuestas
const response = require('../../network/response');
// Importamos el controlador
const controller = require('./controller')
    // Importamos router para trabajar con las rutas
const router = express.Router();

// Preparamos nuestro multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/files/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

// Indicamos nuestra ruta para el metodo get
router.get('/', function(req, res) {

    // Obtenemos el usuario de los que queremos el mensaje
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((error) => {
            response.error(req, res, "Unexpected Error", 500, error);
        });
});


// Indicamos nuestra ruta para el metodo post
// Upload lo pasamos como middleware, que es  un paso antes que se ejecute nuestra funcion
router.post('/', upload.single('file'), function(req, res) {

    // Llamamos a nuestro controladdor y pasamos lo que viene en el body y el file que se adjunta
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((mensaje) => {
            response.success(req, res, mensaje, 201);
        })
        .catch((error) => {
            response.error(req, res, error, 400, "Error en el controlador");
        })
});

// Manejamos los parametros
// Con dos puntos hacemos referencia
router.patch('/:id', function(req, res) {
    console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.text)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((error) => {
            response.error(req, res, 'Error interno', 500, error);
        });
});


router.delete('/:id', function(req, res) {
    const id = req.params.id;
    controller.deleteMessage(id)
        .then((data) => {
            response.success(req, res, `Message ${id} eliminado`, 200);
        })
        .catch((error) => {
            response.error(req, res, 'Error interno', 500, error);
        });
});


// Exportamos todo lo que contenga nuestro router para poder ser accedido desde cualquier sitio
module.exports = router;