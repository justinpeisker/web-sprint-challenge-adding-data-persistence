const db = require('../../data/dbConfig')

function getAll(){
    return db('tasks')
}

const getById = (id) => {
    return db('tasks').where('task_id', id).first()
  }

function add(task) {
    return db('tasks').insert(task)
    .then(([id]) => {
        return getById(id)
      })
}

module.exports = {
    getAll,
    add
}
