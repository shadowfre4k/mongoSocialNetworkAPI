const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");
const thoughSchema = new Schema(
  {
    thoughtText: {
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
    reactions: [Reaction.schema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughSchema);

module.exports = Thought;
