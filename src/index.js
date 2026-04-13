const express = require('express');
const { getTasks, addTask } = require('./utils');

const app = express();

app.use(express.json()); // Parse JSON bodies

app.get('/tasks', (request, response) => {
    response.json({
        tasks: getTasks()
    });
});

app.post('/tasks', (request, response) => {
    if (!request.body.title) {
        return response.status(400).json({error: "Title is required."});
    }

    const task = addTask(request.body);
    response.status(201).json(task);
});

module.exports = app;