const express = require("express");
const CONFIG = require("./config");
const mongoose = require("mongoose");
const cors = require("cors");

// APIs
const todosApi = require("./router/todos");

const app = express();
app.use(cors());
app.use(express.json());

const port = CONFIG.PORT || 3200;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/plain");

  res.send("Hello World!");
});

app.use("/todos", todosApi);

// Connection
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    app.listen(port, () => {
      // Logs will be displayed in Terminal
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to DB. Closing connection.");
  });
