const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productmanager",()=> {
  console.log('Connected to MongoDB!')
})

