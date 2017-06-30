// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the User schema
var UserSchema = new Schema({
  // Just a string
  title: {
    type: String
  },
  // Just a string
  body: {
    type: String
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the Users
// These ids are referred to in the Article model

// Create the User model with the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
