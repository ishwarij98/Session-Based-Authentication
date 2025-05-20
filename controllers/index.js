import express from "express";
const router = express.Router();

router.get("/getall", (req, res) => {
    try {
        console.log("Get Hello API");
        res.status(200).json({ msg: "Get API" });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
});

export default router;