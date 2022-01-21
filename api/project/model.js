const db = require('../../data/dbConfig')

async function getAll(){
    const rows = await db('projects')

    return rows
}

const getById = (id) => {
    return db('projects').where('project_id', id).first()
  }

function add(project) {
    return db('projects').insert(project)
    .then(([id]) => {
        return getById(id)
      })
}

module.exports = {
    getAll,
    add
}