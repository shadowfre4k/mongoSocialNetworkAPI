const { User } = require("../models");

module.exports = {
  async addFriend(req, res) {
    try {
      const friend = await User.findById({ _id: req.params.friendId });
      const user = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: friend._id } },
        { new: true }
      );
      res.json(user);
      if (!user) {
        return res.status(404).json({
          message: "couldn't find friend",
        });
      }

      res.json("friend added");
    } catch (err) {}
  },
};
