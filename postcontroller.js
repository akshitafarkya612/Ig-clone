const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res) => {
  const post = await Post.create({ ...req.body, user: req.userId });
  res.json(post);
};

exports.feed = async (req, res) => {
  const user = await User.findById(req.userId);
  const posts = await Post.find({ user: { $in: user.following } })
    .populate("user comments.user");
  res.json(posts);
};

exports.like = async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, {
    $addToSet: { likes: req.userId }
  });
  res.json({ msg: "Liked" });
};

exports.unlike = async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, {
    $pull: { likes: req.userId }
  });
  res.json({ msg: "Unliked" });
};

exports.comment = async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, {
    $push: { comments: { user: req.userId, text: req.body.text } }
  });
  res.json({ msg: "Comment added" });
};
