const { Schema, model } = require("mongoose");

const thoughSchema = new Schema({
  thoughText: {
    type: String,
    require: true,
    maxLength: 280,
    minLength: 1,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  username: {
    type: String,
    require: true,
  },
  reactions: [],
});

const Thought = model("thought", thoughSchema);

module.exports = Thought;
