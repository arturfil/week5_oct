const express = require('express');
const router = express.Router();
const Book = require("../models/Book");

// GET/books
router.get("/", async (req, res) => {
  const books = await Book.find();
  try {
    return res.status(200).json(books); // 200 OK == successful;
  } catch (error) {
    return res.status(500).json({message: "COuldn't find books " + error}); // 500 == server error;
  }
})

// GET/book/Id
router.get("/book/:id", async (req,res) => {
  const { id } = req.params;
  const singleBook = await Book.findById(id);
  try {
    return res.status(200).json(singleBook);
  } catch (error) {
    return res.status(500).json({message: "Couldn't find that book " + error});
  }
})

// POST/book
router.post("/book", async (req, res) => {
  const bookToCreate = await Book.create(req.body);
  try {
    return res.status(201).json(bookToCreate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't create book " + error});
  }
});

// PUT/book/Id
router.put("/book/:id", async (req, res) => {
  const {id: id} = req.params;
  const bookToUpdate = await Book.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(202).json(bookToUpdate);
  } catch (error) {
    return res.status(500).json({message: "Server Error, Couldn't update the user " + error});
  }
})

// DELETE
router.delete("/book/:id", async (req, res) => {
  const {id} = req.params;
  const bookToDelete = await Book.findByIdAndDelete(id);
  try {
    return res.status(204).json({message: "Book was deleted"});
  } catch {
    return res.status(500).json({message: "Server Error, could not delete book " + error})
  }
})

module.exports = router;