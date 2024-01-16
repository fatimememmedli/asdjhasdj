const express = require("express")
const Controllers = require("./../controllers/controller")
const router = express.Router()

// Get all posts
router.get("/products",Controllers.getAllData )
router.get("/products/:id",Controllers.getDataById )
router.post("/products/",Controllers.postData )

module.exports = router