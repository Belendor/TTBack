const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });


router.post("/submit", upload.single('file'), (req, res) => {
    console.log('got')
    console.log(req.file)
    res.send('Hello Worldssss!')
  });

module.exports = router;
