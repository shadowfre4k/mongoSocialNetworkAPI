const router = require("express").Router();

const { addFriend, removeFriend } = require("../../controllers/friend");
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user");

// /api/user
router.route("/").get(getUsers).post(createUser);

// /api/user/:userId

router.route("/:userId").get(getSingleUser).post(updateUser).delete(deleteUser);

// /api/user/:userId/friends/:friendId

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
module.exports = router;
