const express = require('express');
const cookieParser = require("cookie-parser");

// const logout = require('../controllers/logout');
const router = express.Router();

router.use(cookieParser());

//templates de rota
router.get('/logout', (req, res) => {
    //code
    res.redirect('/');
});

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        res.redirect('/');
    });
});


module.exports = router; 