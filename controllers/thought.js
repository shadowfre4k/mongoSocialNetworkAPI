const { User, Thought, Reaction } = require("../models");

module.exports = {
  //get Thoughts **
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get single thought by ID **
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with that id" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //create thought**

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        {
          _id: req.body.userId,
        },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //update thought **

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with that ID :(" });
      }

      res.json("Successfully! Changed");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove Thought**
  async removeThought(req, res) {
    try {
      const thought = await Thought.findByIdAndRemove({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({
          message: "couldn't find thought",
        });
      }

      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        {
          $pull: { thoughts: req.params.thoughtId },
        },
        {
          new: true,
        }
      );

      if (!user) {
        return res.status(404).json({
          message: "couldn't find thought",
        });
      }

      res.json("thought deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //add a reaction

  async createReaction(req, res) {
    try {
      const reaction = await Reaction.create(req.body);
      const thought = await Thought.findOneAndUpdate(
        {
          _id: req.params.thoughtId,
        },
        { $push: { reactions: reaction._id } },
        { new: true }
      );
      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //delete a reaction

  async removeReaction(req, res) {
    try {
      const reaction = await Reaction.findByIdAndRemove({
        _id: req.params.reactionId,
      });

      if (!reaction) {
        return res.status(404).json({
          message: "couldn't find reaction",
        });
      }

      const thought = await Thought.findOneAndUpdate(
        { reactions: req.params.reactionId },
        {
          $pull: { reactions: { reactionId: req.params.reactionId } },
        },
        {
          new: true,
        }
      );

      if (!thought) {
        return res.status(404).json({
          message: "couldn't find thought",
        });
      }

      res.json("reaction deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
