const Model = require('./model');


function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

async function listUser() {
    return await Model.find();
}



module.exports = {
    add: addUser,
    list: listUser,
    // update: updateUser,
    // remove: removeUser
}