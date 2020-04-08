const express = require("express");
const router = express.Router();

const { getListOfCategories,createCategory, categoryById, read, update, remove } = require("../controllers/category");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/category/:categoryId", read);

router.post(
    "/category/create/:userId", 
    requireSignin, 
    isAuth, 
    isAdmin, 
    createCategory
);

router.put(
    "/category/:categoryId/:userId", 
    requireSignin, 
    isAuth, 
    isAdmin,
    update
)

router.delete(
    "/category/:categoryId/:userId",
    isAuth, 
    isAdmin,
    remove ,
    requireSignin, 
)
router.get("/categories", getListOfCategories) 

router.param("categoryId", categoryById);
router.param("userId", userById);

module.exports = router;
