const { User } = require("../models");

module.exports = {
  //add a friend
  async addFriend(req, res) {
    try {
      const friend = await User.findById({ _id: req.params.friendId });
      const user = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: friend._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: "couldn't find friend",
        });
      }

      res.json("friend added" + friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //remove a friend
  async removeFriend(req, res) {
    try {
      const friend = await User.findById({ _id: req.params.friendId });
      const user = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: friend._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: "couldn't find friend",
        });
      }

      res.json("friend deleted" + friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
