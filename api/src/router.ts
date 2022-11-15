import path from "path";
import {Router} from 'express';

import multer from "multer";

import {listCategories} from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      // callback(null, path.resolve(__dirname, "..", "uploads"));
         callback(null, path.resolve(__dirname, '..', 'uploads').replace('\\src',''));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});


//list category
router.get('/categories', listCategories);

//create category
router.post('/categories', createCategory);


//list products
router.get('/products', listProducts);

//create Product
router.post("/products", upload.single("image"), createProduct);


//get products by category
router.get('/categories/:category/products', listProductsByCategory);

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


