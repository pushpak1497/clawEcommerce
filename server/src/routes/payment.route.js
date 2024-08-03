import { Router } from "express";
import { processPayment } from "../controllers/payment.controller.js";

const router = Router();
router.route("/").post(processPayment);

export default router;
