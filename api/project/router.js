const projectRouter = require('express').Router()
const Project = require('./model')

projectRouter.get('/', (req, res, next) =>{
    Project.getAll()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

projectRouter.post('/', (req, res, next) => {
    const project = req.body
    Project.add(project)
    .then(newProject => {
        res.status(201).json(newProject)
    })
    .catch(next)
})



module.exports = projectRouter