const mongoose = require("mongoose");
// ========================================================================================
// a naming convention inside JS is any varibale starting with Capital letter is either a class or a constructor function
// ========================================================================================

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    firstname: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("message", messageSchema);
