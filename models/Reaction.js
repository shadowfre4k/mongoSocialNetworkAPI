const { Schema, model } = require("mongoose");

const reactSchema = new Schema({
  reactionId: { type: Schema.Types.ObjectId, default: ObjectId },
  reactionBody: { type: String, require: true, maxLength: 280 },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Reaction = model("reaction", friendSchema);

module.exports = Reaction;
