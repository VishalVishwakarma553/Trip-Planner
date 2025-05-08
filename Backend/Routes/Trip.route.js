import express from "express"
import { getTrip, TripHistoryController } from "../Controller/Trip.controller.js"
import { protectedRoute } from "../lib/protectedRoute.js"
const router = express.Router()
router.post("/newTrip",protectedRoute, TripHistoryController)
router.get("/getTrip",protectedRoute, getTrip)
export default router