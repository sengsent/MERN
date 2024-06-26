const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const taskRoutes = require('./routes/taskRoutes');
const cors = require("cors")
const app = express();
const port = 3009;


app.use((req, res, next) => {
  console.log("path " + req.path + " method is " + req.method);
  next();
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello Surya!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("DB connected Successfully listerning", port);
    });
  })
  .catch((err) => console.log("error is showing ", err));


  app.use('/api/tasks', taskRoutes);