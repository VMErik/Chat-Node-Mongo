// Se encarga de decidir todo lo que va a suceder
require('dotenv').config();
const store = require('./store');


function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No hay un usuario o mensaje')
            reject('Los datos son incorrectos');
        } else {

            let fileUrl = '';
            if (file) {
                fileUrl = process.env.FILES_PATH + file.filename;
            }

            // Agregamos valores que no queremos que mande el usuario
            const fullMessage = {
                chat: chat,
                user: user,
                message: message,
                date: new Date(),
                file: fileUrl,
            };
            // En caos de que todo este ok almacenamos y respondemos
            store.add(fullMessage);

            resolve(fullMessage);
        }
    });
}


function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
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