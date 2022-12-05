const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
  app.post('/api/product',ProductController.createProduct);
  app.get('/api/products',ProductController.getAllProducts);
  app.get('/api/products/:id',ProductController.getOneProduct);
  app.put('/api/product/edit/:id',ProductController.editProduct); 
  app.delete('/api/products/:id',ProductController.deleteProduct)
}