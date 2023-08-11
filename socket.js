// Se encargara de nuestro servidor de JS, generar instancia y compartirla
const socketIO = require('socket.io');
// Creamos objeto para guardar la informacion
const socket = {

};

function connect(server) {
    socket.io = socketIO(server);
}

module.exports = {
    // Exportamos la funcion de conexion
    connect,
    // Exportamos el objeto con las propieades
    socket
};