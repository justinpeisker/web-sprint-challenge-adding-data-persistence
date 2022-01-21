const taskRouter = require('express').Router()
const Task = require('./model')

taskRouter.get('/', (req, res, next) =>{
    Task.getAll()
    .then(task => {
        res.json(task)
    })
    .catch(next)
})

taskRouter.post('/', (req, res, next) => {
    const task = req.body
    Task.add(task)
    .then(newTask => {
        res.status(201).json(newTask)
    })
    .catch(next)
})

module.exports = taskRouter
