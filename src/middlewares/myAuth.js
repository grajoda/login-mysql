
const authentication = (req, res, next) => {
    if (!req.session.user || req.session.user == undefined ) {
        res.redirect('/login');
    } else {
        return next();
        // res.redirect('/logged');
    }
};

module.exports = authentication;