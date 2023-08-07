// Se encargara de la interaccion con la base de datos

// Simulamos las operaciones en la base de datos sobre un array
const list = []

function addMessage(message) {
    list.push(message);
}

function getMessages() {
    return list;
}

module.exports = {
    // Le colocamos un nombre y hacemos referencia a la funcion
    add: addMessage,
    list: getMessages
}