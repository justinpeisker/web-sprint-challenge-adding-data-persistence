const db = require('../../data/dbConfig')

function getAll(){
    return db('tasks')
}

function add(task) {
    return db('tasks').insert(task)
    .then(([task_id]) => {
      return getById(task_id)
    })
}

module.exports = {
    getAll,
    add
}
