const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require('./db/connect');
require('dotenv').config()

// middleware
app.use(express.json());
app.use(express.static('./public'));
// routes
app.get("/check", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// port --> 3000
const port = 3000;

// db

const start = async() => {
  try{
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is listening at port ", port));
  }catch(error){
    console.log(error);
  }
}

start()
