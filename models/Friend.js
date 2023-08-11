const { Schema, model } = require("mongoose");

const Friend = model("friend", friendSchema);

module.exports = Friend;
