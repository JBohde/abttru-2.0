var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

let noteSchema = new Schema({
  // `body` is of type String
  body: String
});

// Export the Note model
module.exports =mongoose.model("Note", noteSchema);;