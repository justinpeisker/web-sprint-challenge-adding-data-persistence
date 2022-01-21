const db = require('../../data/dbConfig')

function getAll(){
    return db('resources')
}

const getById = (id) => {
    return db('resources').where('resource_id', id).first()
  }

function add(resource) {
    return db('resources').insert(resource)
    .then(([id]) => {
        return getById(id)
      })
}

module.exports = {
    getAll,
    add,
    getById
}
