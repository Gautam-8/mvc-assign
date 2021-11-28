const express = require("express");
const connect = require("./config/db");

  const usercontroller = require("./controllers/user.controller");

  const studentcontroller = require("./controllers/student.controller");

  const evalcontroller = require("./controllers/eval.controller");


  const app = express();

  app.use(express.json());


  app.use( "/users", usercontroller);

  app.use( "/students", studentcontroller);

  app.use( "/evals", evalcontroller);
  

  app.listen(1212, async function () {
    await connect();
    console.log("listening on port 1212");
  });