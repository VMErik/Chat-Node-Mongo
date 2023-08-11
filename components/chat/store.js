const Modelo = require('./model');


async function addChat(users) {
    const myChat = new Modelo(users);
    return await myChat.save()
}


async function getChats(filterUser) {
    // console.log(filterUser)
    let filter = {};
    if (filterUser !== null) {
        // Armamos el filtro
        filter = {
            users: filterUser
        };
        return await Modelo.find(filter);

    } else {
        return await Modelo.find();
    }
}


module.exports = {
    addChat,
    getChats
}


// USERS
// {
//     "_id": "64d54e26a35dbe398c010aa1",
//     "name": "Erik Uriel Monroy Angeles",
//     "__v": 0
// },
// {
//     "_id": "64d551b467d964ebb7132794",
//     "name": "Christopher Monroy",
//     "__v": 0
// },
// {
//     "_id": "64d56882834ec4976ada29a3",
//     "name": "Alexa Estefania",
//     "__v": 0
// },
// {
//     "_id": "64d5688c834ec4976ada29a5",
//     "name": "Juana Angeles",
//     "__v": 0
// }


// CHAT
// {
//     "_id": "64d561875a319cf6ccabe9f1",
//     "users": [
//         "64d551b467d964ebb7132794",
//         "64d54e26a35dbe398c010aa1"
//     ],
//     "__v": 0
// }