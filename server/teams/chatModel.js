var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var chatSchema = new Schema({ 
  chatRoom: String,
  messages: [String],
  times: [String]
});

var Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;