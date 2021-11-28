const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb://localhost:27017/school" , { useNewUrlParser: true ,useUnifiedTopology: true})
  };