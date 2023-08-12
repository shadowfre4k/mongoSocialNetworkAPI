const { User, Thought } = require("../models");

module.exports = {
  //get users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get single user by id

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user found with that id" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Post new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json({ message: "user created" + user });
    } catch (err) {
      console.error(err);
    }
  },

  // Post Update a user by id
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user found with that ID :(" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Delete User and thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({
        _id: req.params.userId,
      });

      if (!user) {
        return res.status(404).json({ message: "No such user exists" });
      }

      const thoughts = await Thought.findOneAndUpdate(
        { user: req.params.userId },
        { $pull: { thoughts: req.params.userId } },
        { new: true }
      );

      res.json({ message: "User successfully deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
