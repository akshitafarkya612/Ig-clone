const User = require("../models/User");

exports.follow = async (req, res) => {
  await User.findByIdAndUpdate(req.userId, { $addToSet: { following: req.params.id } });
  await User.findByIdAndUpdate(req.params.id, { $addToSet: { followers: req.userId } });
  res.json({ msg: "Followed" });
};

exports.unfollow = async (req, res) => {
  await User.findByIdAndUpdate(req.userId, { $pull: { following: req.params.id } });
  await User.findByIdAndUpdate(req.params.id, { $pull: { followers: req.userId } });
  res.json({ msg: "Unfollowed" });
};

exports.profile = async (req, res) => {
  const user = await User.findById(req.params.id)
    .populate("followers following");
  res.json(user);
};
