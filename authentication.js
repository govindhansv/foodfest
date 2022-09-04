const requiredlogin = (req, res, next) => {
    if (req.session.user) {
        req.session.userstatus = true
        next()
    } else {
        req.session.userstatus = false
        res.redirect('/auths/signup/')
    }
}
const requiredadmin = (req, res, next) => {
    if (req.session.admin) {
        next()
    } else {
        res.redirect('/auths/admin/signin/')
    }
}



module.exports = requiredlogin;
module.exports = requiredadmin;