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


function listChats(filter) {
    console.log(filter)
    return new Promise((resolve, reject) => {
        resolve(store.getChats(filter))
    });
}


module.exports = {
    add: addChat,
    list: listChats
}