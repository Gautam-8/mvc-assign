const express = require("express");

const Eval = require("../models/eval.model");

const Student = require("../models/student.model");

const router = express.Router();


 router.post("", async (req, res) => {
    try {
      const user = await Eval.create(req.body);
  
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  router.get("", async (req, res) => {
    try {
      const user = await Eval.find().populate("instructor").lean().exec();
  
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });


  //particular evaluation
  router.get("/:id/students", async (req,res) => {

    try{
    const eval = await Eval.findById(req.params.id).lean().exec();
    const students = await Student.find( {eval_details:eval._id} )
    .populate("student_details").populate( {path:"eval_details" ,populate :{path:"instructor"}} ).lean().exec();

    return res.status(201).send(students);
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    } 
});

  module.exports = router;