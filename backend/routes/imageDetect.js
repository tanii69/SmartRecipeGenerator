const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), async (req, res) => {

    if (!req.file) {
        return res.status(400).json({ ingredients: [] });
    }

    const filename = req.file.originalname.toLowerCase();

    let ingredients = [];

    if (filename.includes("paneer")) {
        ingredients = ["paneer", "onion", "tomato"];
    }
    else if (filename.includes("egg")) {
        ingredients = ["egg", "salt", "pepper"];
    }
    else if (filename.includes("rice")) {
        ingredients = ["rice", "oil"];
    }
    else if (filename.includes("chicken")) {
        ingredients = ["chicken", "spices"];
    }
    else if (filename.includes("fish")) {
        ingredients = ["fish", "lemon"];
    }
    else {
        ingredients = ["onion", "tomato"];
    }

    res.json({ ingredients: ingredients });

});

module.exports = router;
