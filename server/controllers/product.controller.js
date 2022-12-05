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
module.exports.getOneProduct = (req,res) => {
  Product.findOne({_id:req.params.id})
    .then( products => {
      console.log(products);
      res.json(products)})
    .catch( err => {
      console.log(err);
      res.json(err)})
}
module.exports.editProduct =(req,res) => {
  Product.findOneAndUpdate({_id:req.params.id},req.body)
    .then(product => {
      console.log(product); 
      res.json(product)})
    .catch(err=> { 
      console.log(err); 
      res.json(err)})
}