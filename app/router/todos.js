const { Router } = require("express");
const todoActions = require("../actions/todos");
const { logDbAction } = require("../utils");

const api = Router();

// DEFAULTS
api.all("/", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// READ
api.get("/", async (req, res) => {
  const todos = await todoActions.getAllTodos();
  logDbAction({
    action: "read",
    message: "Fetching all todos from the collection",
  });
  res.send(todos);
});

// CREATE
api.post("/add", async (req, res) => {
  const newTask = req.body.task;
  logDbAction({
    action: "create",
    message: `Adding task [${newTask}] to the collection`,
  });
  const dbResponse = await todoActions.addNewTodo(newTask);

  res.send({
    message: "New task added!",
    response: dbResponse,
  });
});

// DELETE
api.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  logDbAction({
    action: "delete",
    message: `Deleting task [${id}] from the collection`,
  });
  const dbResponse = await todoActions.deleteTodoById(id);
  res.send({
    message: `Task [${id}] deleted!`,
    response: dbResponse,
  });
});

// UPDATE
api.put("/update/:id", async (req, res) => {
  const id = req.params.id;

  const task = req.body?.task;
  const completed = req.body?.completed;

  logDbAction({
    action: "update",
    message: `Updating task [${id}] in the collection`,
  });
  const dbResponse = await todoActions.updateTodoById(id, { task, completed });
  res.send({
    message: `Task [${id}] updated!`,
    response: dbResponse,
  });
});

module.exports = api;
