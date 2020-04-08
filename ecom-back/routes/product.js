const express = require("express");
const router = express.Router();

const { createProduct } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user")
const { photo,listBySearch, getListCategories,listOfRelatedProducts,listOfProducts,productById, read, remove, update } = require("../controllers/product")

//routes
//Gets one product by Id
router.get('/product/:productId', read)

//Create products
router.post(
    "/product/create/:userId", 
    createProduct, 
    isAdmin, 
    requireSignin,
    isAuth,
);
//Delete products
router.delete(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
//Update products
router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update,
);
//All products

router.get('/products', listOfProducts);
router.get('/products/related/:productId',listOfRelatedProducts )
router.get('/products/categories', getListCategories)
router.post("/products/by/search", listBySearch);
router.get('/product/photo', photo )
//Parmas
router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
