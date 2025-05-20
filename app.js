import express from "express";
import dotenv from "dotenv";
dotenv.config();
import user from "./controllers/index.js"

const app = express();
const PORT = process.env.PORT;

app.get("/", (req,res)=>{
    try {
        res.status(200).json({msg:" session based authentication."})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message})
    }
})

app.use("/router",user);

app.listen(PORT,()=>{
    console.log(`Server is up and running at ${PORT}`)
})