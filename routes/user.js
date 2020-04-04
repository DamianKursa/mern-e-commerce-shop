const express = require("express");
const router = express.Router();

const {  requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { userById } = require("../controllers/user");

router.get("/secret/:userId", requireSignin, isAuth, isAdmin,(req, res) => {
    res.json({
        user: req.profile
    });
});

router.param("userId", userById);

module.exports = router;

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