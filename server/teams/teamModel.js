var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var teamSchema = new Schema({

 teamName : String,
 teamDetails: String

});

var Team = mongoose.model("Team", teamSchema);

module.exports = Team;