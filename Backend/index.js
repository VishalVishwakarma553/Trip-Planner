import express from "express"
import dotenv from "dotenv"
import { connectdb } from "./lib/db.js"
import authRoute from "./Routes/auth.route.js"
import tripRoute from "./Routes/Trip.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()
const app = express()


app.use(express.json());
app.use(cookieParser())
const corsOptions = {
  origin: "http://localhost:5173",
  credentials:true
}
app.use(cors(corsOptions))
app.use("/api/v1/user", authRoute)
app.use("/api/v1/trip", tripRoute)
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
  connectdb();
})
