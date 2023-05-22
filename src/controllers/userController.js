const sessions = require('express-session');

const userModel = require('../models/userModel.js');

function newUser(req, res, next){
    const name = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if (!name || !email || !password){
        return res.status(400).json({message: 'Please, check your data'});
    } 

    userModel.createUser(name, email, password, (error, results) => {
        if(error){
            // return res.status(500).json({message: 'Error in create new user'});
            console.log(error);
            res.redirect('back');
        } else {
            // return res.status(201).json({message: 'Successfully created user'})
            // req.session.user = foundUser;
            // res.cookie('user', foundUser.id);
            // console.log('User ' + foundUser.username + ', is logged');
            // console.log("Login sucsessfull!");
            // res.redirect('/');
            console.log(results);
            loginUser();
        }
    });
}


function getUser(req, res){
    const id = req.params.id
    userModel.findUser('id_user', id, (error, foundUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(201).json({message: 'User found'})
        }
    });
}


function setUserData(req, res){
    const id = req.params.id;
    // add the logic to locate fields
}


function deleteActiveUser(req, res) {
    const id = req.params.id;

    userModel.deleteUser(id, (error, results) => {
        if (error){
            console.log(error);
        } else {
            res.status(201).json({message: 'User Deleted'})
        }
    });
}

function loginUser(req, res) {
    const username = req.body.username;
    const password = req.body.password;


    userModel.findUserByUsername(username, (error, foundUser) => {
        if (error) {
            console.log(error);
        } else {
            // res.status(201).json({message: 'User found'})
            console.log('User Found');
            console.log(foundUser[0]);
            const _foundUser = foundUser[0]

            if (password != _foundUser.password) {
                console.log('Senha incorreta \n');
                res.redirect('/')
            } else {
                req.session.user = _foundUser;
                res.cookie('user', _foundUser.id_user);
                
                console.log('User ' + _foundUser.name + ', is logged');

                console.log("Login sucsessfull!");
                console.log('\n Cookie do req.session.user: \n');
                console.log(req.session.user);
                res.redirect('/');
            }
        }
    })
}

module.exports = { newUser, getUser, setUserData, deleteActiveUser, loginUser };