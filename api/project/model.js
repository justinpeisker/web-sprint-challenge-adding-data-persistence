const db = require('../../data/dbConfig')

async function getAll(){
    const rows = await db('projects')
    const result = rows.map(item => {
        return{
            project_name: item.project_name,
            project_description: item.project_description,
            project_completed: Boolean(item.project_completed)
        }
    })
    return result
}

const getById = async (id) => {
    const rows = await db('projects')
        .where('project_id', id)
        .first()
    const result = {
        project_name: rows.project_name,
        project_description: rows.project_description,
        project_completed: Boolean(rows.project_completed)
    }
    return result;
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