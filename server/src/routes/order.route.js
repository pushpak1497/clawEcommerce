import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addToCart, getCart } from "../controllers/cart.controller.js";
import { getOrders, placeOrder } from "../controllers/order.controller.js";

const router = Router();
router.route("/cart").post(verifyJWT, addToCart);
router.route("/cart").get(verifyJWT, getCart);
router.route("/").post(verifyJWT, placeOrder);
router.route("/").get(verifyJWT, getOrders);

export default router;
