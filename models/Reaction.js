const { Schema, model } = require("mongoose");

const reactSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    function() {
      return new ObjectId();
    },
  },
  reactionBody: { type: String, require: true, maxLength: 280 },
  username: {
    type: String,
    required: true,
  },
});

const Reaction = model("reaction", reactSchema);

module.exports = Reaction;
