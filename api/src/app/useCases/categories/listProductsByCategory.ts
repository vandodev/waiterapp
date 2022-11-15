import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { category } = req.params;
    const product = await Product.find().where("category").equals(category);

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
