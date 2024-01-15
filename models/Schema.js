const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const BlogPost = new Schema({
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model('Schema', BlogPost)