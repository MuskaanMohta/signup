import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import { UserRouter } from './routes/user.js'
import { BankRouter } from './routes/bank.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth',UserRouter)
app.use("/api/bank", BankRouter);
mongoose.connect(process.env.MONGODB_URI)
app.use('/api/bank-details', BankRouter);
app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})