const Modelo = require('./model');


async function addChat(users) {
    const myChat = new Modelo(users);
    return await myChat.save()
}


async function getChats() {
    return await Modelo.find();
}


module.exports = {
    addChat,
    getChats
}