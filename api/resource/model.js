const db = require('../../data/dbConfig')

function getAll(){
    return db('resources')
}

function add(resource) {
    return db('resources').insert(resource)
    .then(([resource_id]) => {
      return getById(resource_id)
    })
}

module.exports = {
    getAll,
    add
}
