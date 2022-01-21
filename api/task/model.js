const db = require('../../data/dbConfig')

function getAll(){
    return db('projects')
}

function add(project) {
    return db('projects').insert(project)
    .then(([project_id]) => {
      return getById(project_id)
    })
}

module.exports = {
    getAll,
    add
}
