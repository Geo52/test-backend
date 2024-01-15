const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
const Schema = require("./models/Schema");

const cors = require('cors')

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/post', async (req, res) => {
  try {
    // Assuming your schema has fields like 'name', 'email', etc. Adjust as needed.
    const newData = new Schema({
      title: req.body.title
      // Add other fields as needed
    });

    const savedData = await newData.save();
    res.json(savedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

mongoose
  .connect(
    "mongodb+srv://jorge:69JnidkcqhIXUwQn@test.amni2ct.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  });
