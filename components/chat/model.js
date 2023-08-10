// Importamos mongoose para poder manejar nuestra base de datos
const mongoose = require('mongoose');

// Separamos el esquema de mongoose
const Schema = mongoose.Schema;

// Declaramos nuestro esquema de Mongoose, propiedades y tipos
const mySchema = new Schema({
    // Referenciamos a nuestro otro modelo de usuarios
    // Diciendo que tendremos un arreglo de usuarios
    users: [
        { type: Schema.ObjectId, ref: 'User' }
    ]
});

// Creamos nuestro modelo que va a tener el esquema declarado
// Como le vamos a llamar y que estructura va a tener
const model = mongoose.model('Chat', mySchema);
// Exportamos nuestro modelo
module.exports = model;