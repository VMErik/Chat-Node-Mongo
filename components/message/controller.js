// Se encarga de decidir todo lo que va a suceder

const store = require('./store');


function addMessage(user, message) {
    console.log(user, message);
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No hay un usuario o mensaje')
            reject('Los datos son incorrectos');
        } else {
            // Agregamos valores que no queremos que mande el usuario
            const fullMessage = {
                user: user,
                message: message,
                date: new Date(),
            };
            // En caos de que todo este ok almacenamos y respondemos
            store.add(fullMessage);

            resolve(fullMessage);
        }
    });
}


function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}


function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }
        const result = await store.updateText(id, message);
        resolve(result);
    });
}

function deleteMessage(id) {
    return new Promise(async(resolve, reject) => {
        // validamos
        if (!id) {
            reject('Invalid data');
            return false;
        }
        // Llamamos a nuestro store
        store.removeText(id)
            .then((data) => {
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
    });
}


// Exportamos todas nuestras funciones
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};