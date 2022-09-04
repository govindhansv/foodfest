var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let user = null;
    if (req.session) {
        user = req.session.user
    }
    res.render('index', { user: user });
});

module.exports = router;