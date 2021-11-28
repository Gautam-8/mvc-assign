const express = require("express");

const Student = require("../models/student.model");

const router = express.Router();


router.post("", async (req, res) => {
    try {
      const user = await Student.create(req.body);
  
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  

  router.get("", async (req, res) => {
    try {
      const user = await Student.find().populate("student_details").populate("eval_details").lean().exec();
  
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });


  //topper
router.get("/highest", async (req,res) => {

    try{
    
    const student = await Student.find().sort({marks:-1}).limit(1)
    .populate("student_details").populate( {path :"eval_details", populate:{ path:"instructor"} } ).lean().exec();

    return res.status(201).send(student);
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    } 
});

  module.exports = router;