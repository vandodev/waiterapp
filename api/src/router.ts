import {Router} from 'express';

export const router = Router();

//List category
router.get('/categories', (req, res) =>{
  res.send('ok');
});

//create category
router.post('/categories', (req, res) =>{
  res.send('ok');
});

//create Product
router.post('/products', (req, res) =>{
  res.send('ok');
});

//get products by category
router.get('/categories/:categoriesId/products', (req, res) =>{
  res.send('ok');
});

//create order
router.post('/orders', (req, res) =>{
  res.send('ok');
});

//change order status
router.patch('/orders/:orderId', (req, res) =>{
  res.send('ok');
});

//delite/cancel order
router.delete('/orders/:orderId', (req, res) =>{
  res.send('ok');
});


