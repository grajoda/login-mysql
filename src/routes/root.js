const express = require('express');
const cookieParser = require("cookie-parser");

const auth = require('../middlewares/myAuth')
const router = express.Router();


router.get('/', auth, (req, res) => {
    if (req.session.user) {
        res.redirect('/logged'); 
    }
});

module.exports = router;