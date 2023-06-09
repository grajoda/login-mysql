require('dotenv').config();

const express = require('express');
const sessions = require('express-session');
const bodyParser = require('body-parser');

const app = express();

const path = require('path');

app.use("/public",express.static("../public"));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "secret",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));


const Routes = require('./routes/routes');
app.use('/', Routes);


// PORT 
app.listen(3100);
console.log('3100 server online, My lord');