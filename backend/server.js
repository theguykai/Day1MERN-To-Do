require("dotenv").config()
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Task = require('./models/Tasks');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post('/tasks/add', async (req, res) => {
    const { title, difficulty } = req.body;
    const task = new Task({
        title,
        difficulty
    });
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});