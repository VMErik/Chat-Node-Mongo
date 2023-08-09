// Contendra toda la informacion para la gestion de la BD

// Importamos mongoose
const db = require('mongoose');


// Hacemos uso de nuestras promesas de JavaScript
db.Promise = global.Promise;

// Pasamos como parametro la cadena de conexion
async function connect(url) {
    // Conexion : 'mongodb+srv://mikkonenvm:erik12345@cluster0.cpoovak.mongodb.net/chat?retryWrites=true&w=majority'
    await db.connect(url, {
        useNewUrlParser: true,
    });
    console.log('[db] Conectada con exito');
}

// Exportamos la funcion connect para poderla ocupar
module.exports = connect;