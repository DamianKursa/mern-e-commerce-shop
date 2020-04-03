const express = require("express");
const router = express.Router();

const { createProduct } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user")
router.post(
    "/product/create/:userId", 
    createProduct, 
    isAdmin, 
    requireSignin,
    isAuth,
    (req, res)=>{

});

router.param("userId", userById);

module.exports = router;
