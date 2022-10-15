const {
  mongoResponseHandler,
  mongoErrorHandler,
} = require("../utils");

const todoModel = require("../models/todo");

const todoActions = {
  getAllTodos: () => {
    return todoModel.find().then(mongoResponseHandler).catch(mongoErrorHandler);
  },
  getTodoById: (id) => {},
  addNewTodo: (task) => {
    return todoModel.insertMany([
      {
        task: task,
        created: new Date(),
        completed: false,
      },
    ])
      .then(mongoResponseHandler)
      .catch(mongoErrorHandler);
  },
  updateTodoById: (id, { task, completed }) => {
    return todoModel.findByIdAndUpdate(id, { task, completed })
      .then(mongoResponseHandler)
      .catch(mongoErrorHandler);
  },
  deleteTodoById: (id) => {
    return todoModel.findByIdAndDelete(id)
      .then(mongoResponseHandler)
      .catch(mongoErrorHandler);
  },
};

module.exports = todoActions;