const store = require('./store');


function addUser(name) {
    // Validamos
    if (!name) {
        return Promise.reject('Invalid Name');
    }
    const user = {
        name
    };
    // Llamamos a nuestro store para que almacene
    return store.add(user);
}


function getUsers() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}



module.exports = {
    addUser,
    getUsers
};