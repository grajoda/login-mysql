const express = require('express');
const cookieParser = require("cookie-parser");

const auth = require('../middlewares/myAuth');
const router = express.Router();

router.use(cookieParser());


router.get('/logged', auth, (req, res) => {
    console.log(req.session.user)
    res.render('pages/loggedPage', {
        user: req.session.user
    });
});


module.exports = router; 