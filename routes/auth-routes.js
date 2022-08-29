const express = require("express");
const router = express.Router();
const authsController = require("../controllers/auths-controller");

router.get('/signup', authsController.getSignup);
router.post("/signup", authsController.postSignup);
router.get('/signin', authsController.getSignin);
router.post("/signin", authsController.postSignin);


module.exports = router;
