import express from "express"
import { login, logout, signup } from "../Controller/auth.controller.js";
const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.get("/logout", logout)
export default router;
