const db = require('../../data/dbConfig')

async function getAll(){
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')

        const result = rows.map(item => {
            return{
                task_description: item.task_description,
                task_notes: item.task_notes,
                task_completed: Boolean(item.task_completed),
                project_name: item.project_name,
                project_description: item.project_description
            }
        })
    return result

}
// select * 
//     tasks as t
//     leftJoin projects as p
//         on t.project_name = p.user_id

const getById = async (id) => {
    const rows = await db('tasks')
        .where('task_id', id)
        .first()

    const result = {
        task_description: rows.task_description,
        task_notes: rows.task_notes,
        task_completed: Boolean(rows.task_completed),
        project_name: rows.project_name,
        project_description: rows.project_description
    }
    return result;
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
