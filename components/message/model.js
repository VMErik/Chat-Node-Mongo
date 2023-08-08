// Importamos mongoose para poder manejar nuestra base de datos
const mongoose = require('mongoose');

// Separamos el esquema de mongoose
const Schema = mongoose.Schema;

// Declaramos nuestro esquema de Mongoose, propiedades y tipos
const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date
});


// Creamos nuestro modelo que va a tener el esquema declarado
// Como le vamos a llamar y que estructura va a tener
const model = mongoose.model('Message', mySchema);
// Exportamos nuestro modelo
module.exports = model;