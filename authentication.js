const requiredlogin = (req,res)=>{
  if (req.session.user) {
      req.session.userstatus = true
  }else{
    req.session.userstatus = false
  }
}

module.exports = requiredlogin;
