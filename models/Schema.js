const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const BlogPost = new Schema({
  title: String
});

module.exports = mongoose.model('Schema', BlogPost)