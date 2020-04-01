const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt'); //for auth check
exports.signup = (req, res) => {
    // console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.signin =(req, res) => {
    //find the user based on email

    const {email, password} = req.body
    User.findOne({email}, (err, user)=>{
        //Check if there is user email in database.
        if(err || !user){
            return res.status(400).json({
                err:" User with that email does not exist. Please signup"
            });
        }
        //if user is found make sure the email and password match
        //create auth method in User model 
        if(!user.authenticate(password)) {
            return res.json(401).json({
                error : "Email or password don't match."
            })
        }
        //generate a signed token with user id and secret
        const token = jwt.sign({_id: user.id}, process.env.JWT_SECRET);
        //presit the token as 't' in cookie with expiry date
        res.cookie('t'/*this is name*/, token, {expires: new Date(Date.now() + 99999)})
        // return response with user and token to frontend
        //Desstructuring
        const {_id, name, email, role} = user
        return res.json(
            {
            token, 
            user: {_id, email, name, role},
            message: "Login Sucess"
        })
    })
}