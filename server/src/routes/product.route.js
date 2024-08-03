import { Router } from "express";
import { verifyJWT, authorizeAdmin } from "../middlewares/auth.middleware.js";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.route("/").post(verifyJWT, authorizeAdmin, createProduct);
router.route("/").get(verifyJWT, getProducts);
router.route("/:productId").put(verifyJWT, authorizeAdmin, updateProduct);
router.route("/:productId").delete(verifyJWT, authorizeAdmin, deleteProduct);

export default router;
