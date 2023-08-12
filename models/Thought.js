const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");
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
    type: Schema.Types.ObjectId,
    require: true,
  },
  reactions: [Reaction],
});

const Thought = model("thought", thoughSchema);

module.exports = Thought;
