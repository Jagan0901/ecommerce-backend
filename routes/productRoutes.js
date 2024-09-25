import express from "express";
import { addProducts, getProducts, getProductsByCategory } from "../controllers/productController.js";

const router = express.Router();

router.get('/', getProducts);
router.post('/', addProducts);
router.get('/category/:category', getProductsByCategory);

export const productRoutes = router;