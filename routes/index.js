
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.session.user);
  res.render('index',{user:req.session.user.user});
  // if (req.session.user.loggedIN) {
  // } else {
  //   res.render('index');
  // }
});



module.exports = router;



