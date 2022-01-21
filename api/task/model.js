const db = require('../../data/dbConfig')

async function getAll(){
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')

    const result = {

    }
    return rows

}
// select * 
//     tasks as t
//     leftJoin projects as p
//         on t.project_name = p.user_id

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
