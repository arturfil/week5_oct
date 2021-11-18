const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET/users
router.get("/", async (req, res) => {
  const users = await User.find();
  try {
    return res.status(200).json(users); // 200 OK == successful;
  } catch (error) {
    return res.status(500).json(error); // 500 == server error;
  }
})

// GET/users/Id
router.get("/user/:id", async (req,res) => {
  const { id } = req.params;
  const singleUser = await User.findById(id);
  try {
    return res.status(200).json(singleUser);
  } catch (error) {
    return res.status(500).json(error);
  }
})

// POST/user
router.post("/user", async (req, res) => {
  const userToCreate = await User.create(req.body);
  try {
    return res.status(201).json(userToCreate);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// PUT/user/Id
router.put("/user/:id", async (req, res) => {
  const {id: id} = req.params;
  const userToUpdate = await User.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(202).json(userToUpdate);
  } catch (error) {
    return res.status(500).json({message: "Server Error, Couldn't update the user " + error});
  }
})

// DELETE
router.delete("/user/:id", async (req, res) => {
  const {id} = req.params;
  const userToDelete = await User.findByIdAndDelete(id);
  try {
    return res.status(204).json({message: "User was deleted"});
  } catch {
    return res.status(500).json({message: "Server Error, could not delete user " + error})
  }
})

module.exports = router;