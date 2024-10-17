const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    difficulty: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    }
})

module.exports = mongoose.model('Tasks', TaskSchema);