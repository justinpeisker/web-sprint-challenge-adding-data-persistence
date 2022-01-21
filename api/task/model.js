function getAll(){
    return Promise.resolve('get all tasks')
}

function add() {
    return Promise.resolve('added task')
}

module.exports = {
    getAll,
    add
}
