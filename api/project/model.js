function getAll(){
    return Promise.resolve('get all projects')
}

function add() {
    return Promise.resolve('added project')
}

module.exports = {
    getAll,
    add
}