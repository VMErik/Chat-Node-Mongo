// Se encargara de la interaccion con la base de datos


// Hacemos una instancia de nuestro modelo
const Model = require('./model')



function addMessage(message) {
    console.log("Añadimos desde el store");
    // Añadimos a nuestra base de datos, pasando a nuestra instancia el mensaje
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {

    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            // Con nuestra expresion regular hacemos que sea indiferente minusculas y mayusculas
            filter = { user: new RegExp(filterUser, "i") };
        }
        // Retornemos nuestros mensajes desde el modelo
        // Populamos la consulta para obtener la referencia 
        Model.find(filter)
            // Indicamos co que coleccion
            .populate('user')
            // Ejecutamos el populate
            .exec()
            // Si todo esta ok
            .then((populated) => {
                resolve(populated);
            })
            // Si ocurre un error
            .catch((error) => {
                reject(error);
            });
    });

}

async function updateMessage(id, message) {
    // // Primero buscamos
    // const foundMessage = await Model.findOne({ _id: id });
    // // Actualizamos
    // foundMessage.message = message;
    // const newMessage = await foundMessage.save();
    // return newMessage;

    // Lo podemos reemplazar solo en una funcion
    const updatedMessage = await Model.findOneAndUpdate({ _id: id }, { message }, { new: true });
    return updatedMessage;
}

async function removeMessage(id) {
    // Eliminamos nuestro archivo
    const removedMessage = await Model.deleteOne({ _id: id });
    return removedMessage;
}


module.exports = {
    // Le colocamos un nombre y hacemos referencia a la funcion
    add: addMessage,
    list: getMessages,
    updateText: updateMessage,
    removeText: removeMessage
}