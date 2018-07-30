const requireUser = (req, res, next) => {
    if (req.session.currentUser) {
        next();
    } else {
        res.redirect('/auth/login');
    }
};

const requireAnom = (req, res, next) => {
    if (!req.session.currentUser) {
        next();
    } else {
      res.redirect('/home');
    }
};

module.exports = {
    requireUser,
    requireAnom
};