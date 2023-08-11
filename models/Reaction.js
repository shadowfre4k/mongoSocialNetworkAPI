const { Schema, model } = require("mongoose");

const Reaction = model("reaction", friendSchema);

module.exports = Reaction;
