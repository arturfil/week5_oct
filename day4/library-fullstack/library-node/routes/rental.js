const express = require('express');
const router = express.Router();
const Rental = require('../models/Rental')

// GET/rentals
router.get("/", async (req, res) => {
  const rentals = await Rental.find().populate("user").populate("book")
  try {
    return res.status(200).json(rentals); // 200 OK == successful;
  } catch (error) {
    return res.status(500).json({message: "COuldn't find rentals " + error}); // 500 == server error;
  }
})

// GET/rental/Id
router.get("/rental/:id", async (req,res) => {
  const { id } = req.params;
  const singleRental = await Rental.findById(id);
  try {
    return res.status(200).json(singleRental);
  } catch (error) {
    return res.status(500).json({message: "Couldn't find that rental " + error});
  }
})

// POST/rental
router.post("/rental", async (req, res) => {
  const rentalToCreate = await Rental.create(req.body);
  try {
    return res.status(201).json(rentalToCreate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't create rental " + error});
  }
});

// PUT/rental/Id
router.put("/rental/:id", async (req, res) => {
  const {id: id} = req.params;
  const rentalToUpdate = await Rental.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(202).json(rentalToUpdate);
  } catch (error) {
    return res.status(500).json({message: "Server Error, Couldn't update the user " + error});
  }
})

// DELETE
router.delete("/rental/:id", async (req, res) => {
  const {id} = req.params;
  const rentalToDelete = await Rental.findByIdAndDelete(id);
  try {
    return res.status(204).json({message: "Rental was deleted"});
  } catch {
    return res.status(500).json({message: "Server Error, could not delete rental " + error})
  }
})

module.exports = router;