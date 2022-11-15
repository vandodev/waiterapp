import {Router} from 'express';

import {listCategories} from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';

export const router = Router();

//list category
router.get('/categories', listCategories);

//create category
router.post('/categories', createCategory);

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


