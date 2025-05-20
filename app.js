import express from "express";
import dotenv from "dotenv";
dotenv.config();
import user from "./controllers/index.js"

import cookieParser from "cookie-parser"; // new code
import session from "express-session"; // new code 





const app = express();
const PORT = 5002;




app.use(cookieParser()) // to store data in cookies 


//  // cookie will have randon value inside it ==> w
app.use(session({
    secret: "suhail", // Used to sign the session ID cookie

    resave: false, // Don’t save session if unmodified

    // you want to update value the req.session.fnae 
    saveUninitialized: false, // Don’t create session until something is stored

    // cookie should be true while deploying on https
    // http ==> false 
    // https ==> true
    cookie: { secure: false }, // Set to true if using HTTPS
}))



app.use(express.json()) // To accept the data from req.boy to make working post/put

app.get("/", (req, res) => {
    try {

        res.status(200).json({ msg: " session based authentication." })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message })
    }
})

// let req = {
//     body: "suhail", // u get data from postman
//     age: 22,
//     gender:"Male"
// }

// req.gender = "Male"

// req.age = 30;

// delete req.body;



// In the Login API 

// 

// 2 Methods for Authentication

// 1. JWT With Token passing 
// 2. Session Method with Cookies 



app.post("/login", (req, res) => {
    try {



        // "_id": "682c4162d6494bcb6afcf17b", // unique


        // req.fname = "Suhail";
        // req.id = "682c4162d6494bcb6afcf17b" /// user._id

        // req =={}
        // express-session
        // req.session = {}

        req.session.fname = "Azhar";
        req.session._id = "682c4162d6494bcb6afcf17b"

        // sessions we use _id 

        req.session.token = ""


        res.status(201).json({ msg: "all ok" })


    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message })
    }
})




app.get("/getall", (req, res) => {
    try {
        console.log(req.session.fname, req.session._id)

        console.log(req.session)

        res.status(201).json({ msg: req.session._id })





    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message })
    }
})



app.get("/getbyid", (req, res) => {
    try {
        let id = req.session._id;

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message })
    }
})


app.use("/user", user);

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`)
})