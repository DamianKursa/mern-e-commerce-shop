const Product = require("../models/product");
const formidable = require('formidable');
const _ = require("loadsh");
const { errorHandler } = require("../helpers/dbErrorHandler")
const fs = require('fs');

//METODTHS
exports.productById = (req, res, next, id) =>{
        Product.findById(id).exec((err,product)=>{
            if(err || !product){
                return res.status(400).json({
                    error:"Product not found"
                })
            }
            //The product we that we found in database based on ID, we make avalible in the request object with the name product :).
            req.product = product
            next();
        })
}

exports.read = (req,res) =>{
    req.product.photo = undefined;
    
    return res.json(req.product)
}
exports.createProduct = (req, res) => {
    //Spoko paczka , bedzie parsowac nadchodzace data z formularza 
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        //check all fields
        const { 
            name,
            description,
            price,
            category,
            quantity

        } = fields
        if(!name || !description || !price || !category || !quantity){
            return res.status(400).json({
                error:"All fields are require"
            })
        }
        let product = new Product(fields)
        if (files.photo) {
            //console.log("FILES PHOTO : " ,files.photo)
            //1kb = 1000
            //1mb = 1000000
            if(files.photo.size > 100000000){
                return res.status(400).json({
                    error:"Image should be less than 100mb"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};

exports.remove = (req, res) => {
    let product = req.product;
    product.remove((err, deletedProduct) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: "Product deleted successfully"
        });
    });
};
exports.update = (req, res) => {
    //Spoko paczka , bedzie parsowac nadchodzace data z formularza 
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        //check all fields
        const { 
            name,
            description,
            price,
            category,
            quantity

        } = fields
        if(!name || !description || !price || !category || !quantity){
            return res.status(400).json({
                error:"All fields are require"
            })
        }
        let product = req.product
        product = _.extend(product, fields)

        if (files.photo) {
            //console.log("FILES PHOTO : " ,files.photo)
            //1kb = 1000
            //1mb = 1000000
            if(files.photo.size > 100000000){
                return res.status(400).json({
                    error:"Image should be less than 100mb"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};
exports.getAllProducts = (req, res) =>{
    Product.find().exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"Couldn't fetch products"
            })
        }
        res.json(data)
    })
}
