const { mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);

module.exports = { Todo };

