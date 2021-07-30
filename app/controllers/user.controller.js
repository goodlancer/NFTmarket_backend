const db = require("../models");
const User = db.user;
const Role = db.role;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.changeImage = async (req, res) => {
  const userid = req.userId;

  const myquery = { _id: userid };
  const newvalues = {$set: {avata: req.body.profileImg} };
  const options = { new: true };
  const result = await User.findOneAndUpdate(myquery, newvalues, options);
  console.log(result);
  // let user = await User.findById(userId).exec();
  // user.avata = req.body.profileImg
  // user.save();
  // console.log(userid);
  res.status(200).send({
    id: result._id,
    avata: result.avata,
    firstname: result.first,
    lastname: result.last,
    username: result.username,
    email: result.email,
  })
};

exports.userBoard = async (req, res) => {
  const userId = req.userId;
  let user = await User.findById(userId).exec();
  console.log(user);
  res.status(200).send({user: user});
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
