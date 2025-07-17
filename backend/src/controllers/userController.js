const User = require('../models/User');

exports.getAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.create = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.status(201).json(user);
};