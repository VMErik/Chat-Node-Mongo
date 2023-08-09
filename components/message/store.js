// Se encargara de la interaccion con la base de datos
// Importamos mongoose
const db = require('mongoose')

// Hacemos una instancia de nuestro modelo
const Model = require('./model')
    // Hacemos uso de nuestras promesas de JavaScript
db.Promise = global.Promise;
// Conexion : mongodb+srv://mikkonenvm:erik12345@cluster0.cpoovak.mongodb.net/
db.connect('mongodb+srv://mikkonenvm:erik12345@cluster0.cpoovak.mongodb.net/chat?retryWrites=true&w=majority', {
    useNewUrlParser: true,

});

console.log('[db] Conectada con exito')

function addMessage(message) {
    console.log("Añadimos desde el store");
    // Añadimos a nuestra base de datos, pasando a nuestra instancia el mensaje
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    // return list;
    // Retornemos nuestros mensajes desde el modelo
    return await Model.find();
}

async function updateMessage(id, message) {
    // Primero buscamos
    const foundMessage = await Model.findOne({ _id: id });
    // Actualizamos
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}


module.exports = {
    // Le colocamos un nombre y hacemos referencia a la funcion
    add: addMessage,
    list: getMessages,
    updateText: updateMessage
}