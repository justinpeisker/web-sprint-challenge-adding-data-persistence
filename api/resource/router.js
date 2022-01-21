const resourceRouter = require('express').Router()
const Resource = require('./model')

resourceRouter.get('/', (req, res, next) =>{
    Resource.getAll()
    .then(resource => {
        res.json(resource)
    })
    .catch(next)
})

resourceRouter.post('/', (req, res, next) => {
    const resource = req.body
    Resource.add(resource)
    .then(newResource => {
        res.status(201).json(newResource)
    })
    .catch(next)
})

module.exports = resourceRouter
