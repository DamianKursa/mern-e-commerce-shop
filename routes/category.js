const express = require("express");
const router = express.Router();

const { createCategory } = require("../controllers/category");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user")
router.post(
    "/category/create/:userId", 
    createCategory, 
    isAdmin, 
    requireSignin,
    isAuth,
    (req, res)=>{

});

router.param("userId", userById);

module.exports = router;
