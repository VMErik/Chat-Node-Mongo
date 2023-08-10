const store = require('./store');


function addChat(users) {
    return new Promise((resolve, reject) => {
        if (users.length === 0) {
            reject('El array de usuarios esta vacio');
        }
        const myChat = {
            users: users
        };
        resolve(store.addChat(myChat));
    })
}


function listChats() {
    return new Promise((resolve, reject) => {
        resolve(store.getChats())
    });
}


module.exports = {
    add: addChat,
    list: listChats
}