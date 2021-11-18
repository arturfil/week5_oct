const express = require('express');
const router = express.Router();

const User = require('../models/User');

const { generateJwt } = require('../helpers/generateJwt');

const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  return res.json({message: 'reached'});
})

router.post('/signup', async (req, res) => {

  const { email } = req.body;
  const testEmail = await User.findOne({email});

  if (testEmail) {
    return res.status(500).json({message: "Couldn't signup, please try again"})
  }

  const user = new User(req.body);

  try {
    const salt = bcrypt.genSaltSync(); // 23pfda34sfds32fdwfdo24rfdd2sdf
    user.password = bcrypt.hashSync(req.body.password, salt);
    user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({message: "Couldn't create the user"});
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email});
  if (!user) {
    return res.status(500).json({message: "Please check credentials"})
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(500).json({message: "Please check credentials"});
  }
  const token = await generateJwt(user._id);
  return res.status(200).json({token, user});
})

module.exports = router;