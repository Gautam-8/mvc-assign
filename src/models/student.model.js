
const mongoose = require("mongoose");

 const studentSchema = new mongoose.Schema(
    {
        student_details: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
          },
      roll_no: { type: Number, required: true },
      current_batch: { type: String, required: true },
      marks: {type: Number, required: true },

      eval_details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "eval",
        required: true,
      },
      
    },
    {
      versionKey: false,
     // timestamps: true,
    }
  );
  
  module.exports = mongoose.model("student", studentSchema);