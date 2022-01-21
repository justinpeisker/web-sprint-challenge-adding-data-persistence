const express = require('express');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
// const taskRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
// server.use('/api/tasks', taskRouter);



server.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'oops',
        message: err.message,
        stack: err.stack
    })
})

server.use('*', (req, res) => {
    res.json({api: 'catch all up'})
})


module.exports = server;
