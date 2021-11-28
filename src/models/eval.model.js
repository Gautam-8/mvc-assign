
const mongoose = require("mongoose");

  const evalSchema = new mongoose.Schema(
    {
      eval_date: { type: String, required: true },
      topic: { type: String, required: true },
    
      instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      
    },
    {
      versionKey: false,
     // timestamps: true,
    }
  );
  
 module.exports = mongoose.model("eval", evalSchema);