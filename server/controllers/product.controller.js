const Product = require("../models/product.model");
module.exports.createProduct = (request,response) => {
  Product.create(request.body)
    .then( product => response.json(product))
    .catch(err => response.json(err))
};
module.exports.getAllProducts = (req,res) => {
  Product.find({})
    .then( products => {
      console.log(products);
      res.json(products)})
    .catch( err => {
      console.log(err);
      res.json(err)})
}