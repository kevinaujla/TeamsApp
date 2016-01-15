var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userchema = new Schema({

 userName : String

});

var Users = mongoose.model("Users", userSchema);

module.exports = Users;