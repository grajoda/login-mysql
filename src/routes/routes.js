const express = require('express');
const router = express.Router();

const rootRoute = require('./root');
router.use('/', rootRoute);

const loginRoute = require('./loginRoute');
router.use('/', loginRoute);

const registerRoute = require('./registerRoute');
router.use('/', registerRoute);

const loggedRoute = require('./loggedRoute');
router.use('/', loggedRoute);

const logoutRoute = require('./logoutRoute');
router.use('/', logoutRoute);

module.exports = router; 