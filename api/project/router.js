const projectRouter = require('express').Router()
const Project = require('./model')

projectRouter.get('/', (req, res, next) =>{
    Project.getAll()
    .then(projects => {
        res.json(projects)
    })
})





module.exports = projectRouter