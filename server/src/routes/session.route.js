import { Router } from "express";
import { getSessions } from "../controllers/session.controller.js";

const router = Router();
router.route("/", getSessions);

export default router;
