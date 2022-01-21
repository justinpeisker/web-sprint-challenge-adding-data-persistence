function getAll(){
    return Promise.resolve('get all resources')
}

function add() {
    return Promise.resolve('added resource')
}

module.exports = {
    getAll,
    add
}
