const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOne({ _id: userID });

    if (!user) {
      return res.status(404).json({ msg: `no user with the id : ${userID}` });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOneAndUpdate({ _id: userID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ msg: `no user with the id : ${userID}` });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOneAndDelete({ _id: userID });

    if (!user) {
      return res.status(404).json({ msg: `no user with the id : ${userID}` });
    }

    res.status(204).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
