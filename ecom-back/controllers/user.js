const User = require("../models/user");

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.profile = user;
        next();
    });
};

exports.readUser = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

exports.updateUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized to perform this action"
                });
            }
            user.hashed_password = undefined;
            user.salt = undefined;
            res.json(user);
        }
    );
};
/*What the code does is this: for routes that have a userId parameter 
(that is, routes that look similar to this: /user/:userId), Express will 
call the load() function before the route handler is called.
The load function loads the user profile belonging to the userId 
from the database, and adds it to req as a newly created property req.profile.
The .profile property name is arbitrarily named by the author and demonstrates 
the fact that it's perfectly valid to add properties to req 
(or res, for that matter, but convention is to add these properties to req).
In the route handler, you can then use req.profile. 
It's basically a way of propagating data from middleware and app.param() 
implementations to other parts of the route handling. */