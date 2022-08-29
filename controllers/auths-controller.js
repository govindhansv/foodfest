const fun = require('../functions');

const getSignup = async function (req, res) {
    if (req.session.signupstatusfalse) {
        res.render('forms/signup', { err: true })
    } else
        res.render('forms/signup')
}

const postSignup = async function (req, res) {
    console.log(req.body);
    fun.doSignup(req.body).then((response) => {
        console.log('post');
        if (response.signupstatus) {
            response.loggedIN = true
            console.log(response);
            res.json(response)
        } else {
            response.loggedIN = false
            res.json(response)
        }
    })
}

const getSignin = async function (req, res) {
    console.log(req.session);
    if (req.session.loggedIN) {
        res.redirect('/users/')
    }
    if (req.session.loggedfalse) {
        res.render('forms/signin', { err: true });
    } else {
        res.render('forms/signin');
    }
}

const postSignin = async function (req, res) {
    fun.doLogin(req.body).then((response) => {
        if (response.loginstatus) {
            response.loggedIN = true
            res.json(response)
        } else {
            response.loggedIN = false
            res.json(response)
        }
    })
}


exports.getSignup = getSignup;
exports.postSignup = postSignup;
exports.getSignin = getSignin;
exports.postSignin = postSignin;


