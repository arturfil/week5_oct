// imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// connection to the db
mongoose.connect('mongodb://localhost/libraryapp')
  .then(() => console.log("Connected to db 🔌"))
  .catch(() => console.log("Failed to connect ❌"));

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/books", require('./routes/book'));
app.use("/api/rentals", require('./routes/rental'));
app.use("/api/auth", require('./routes/auth'));
// books
// rentals

// port & listening
const port = 5000;
app.listen(port, () => {
  console.log("Server running...⚡")
})
