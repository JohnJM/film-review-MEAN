var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../models/user');
var debug = require('debug')('myapi:server');
var Film = require("../models/film");
var Comment = require('../models/comment');

router.post('/signup',function(req,res){
    if(!req.body.email || !req.body.password){
        res.json({success: false, msg:'please pass email and password'});
    } else {
        var newUser = new User({email:req.body.email, password:req.body.password});
        newUser.save(function(err){
            if(err) {
                console.log(err);
                return res.json({success: false, msg: 'email already exists'});
            }
            res.json({success: true, msg: 'success, created new user', test:'testingJSON'})
        });
    }
});

router.post('/signin', function(req, res){
    User.findOne({
        email:req.body.email
    }, function(err, user){
        if (err) {
            debug(err);
            throw err};
        if (!user){
            res.status(401).send({success: false, msg: 'authentication failed. user not found'});
        } else
        {
            user.comparePassword(req.body.password, function(err, isMatch){
                if(isMatch && !err){
                    var token = jwt.sign(user.toJSON(), config.secret);
                    res.json({success:true, token:'JWT ' + token});
                } else {
                    debug(err);
                    res.status(401).send({success: false, msg: 'wrong password'});
                }
            })
        }
    })
});

/*Review management*/

router.post('/film', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        console.log(req.body);
        var newFilm = new Film({
            id: req.body.id,
            title: req.body.title,
            director: req.body.director,
            studio: req.body.studio,
            year: req.body.year,
            review: req.body.review,
            reviewer:req.body.reviewer,
            img: req.body.img
        });

        newFilm.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'Save filefailed.'});
            }
            res.json({success: true, msg: 'Successful created new film.'});
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

router.get('/film', passport.authenticate('jwt', { session: false}), function(req, res) {

   var token = getToken(req.headers);
    if (token) {
        Film.find(function (err, films) {
            if (err) return next(err);
            res.json(films);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

/* GET SINGLE Film BY ID */
    router.get('/film:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
         var token = getToken(req.headers);
         if (token) {
            Film.findById(req.params.id, function (err, post) {
                if (err) return next(err);
                res.json(post);
            });
         } else {
             return res.status(403).send({success: false, msg: 'Unauthorized.'});
         }
    });


/* UPDATE Film Review */
//////
    router.put('/film:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
    var token = getToken(req.headers);
     if (token) {
        Film.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});


/* DELETE Film */

    router.delete('/film:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
        var token = getToken(req.headers);
        if (token) {
        Film.findByIdAndRemove(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
        } else {
            return res.status(403).send({success: false, msg: 'Unauthorized.'});
        }
    });




/* GET all Users by ID */
router.get('/user', passport.authenticate('jwt', { session: false}), function(req, res) {

    var token = getToken(req.headers);
    if (token) {
        User.find(function (err, users) {
            if (err) return next(err);
            res.json(users);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});


/* GET SINGLE USER BY ID */
router.get('/user:id', function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        User.findById(req.params.id, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

router.delete('/user:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

router.put('/user:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

/*Comments management*/

router.post('/comment', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        console.log(req.body);
        var newComment = new Comment({
            content: req.body.content,
            userid: req.body.userid,
            reviewid: req.body.reviewid,
            username: req.body.username
        });

        newComment.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'Save comment failed.'});
            }
            res.json({success: true, msg: 'Successful created new comment.'});
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

//get all comments
router.get('/comment', passport.authenticate('jwt', { session: false}), function(req, res) {

    var token = getToken(req.headers);
    if (token) {
        Comment.find(function (err, users) {
            if (err) return next(err);
            res.json(users);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

//get comment by id
router.get('/comment:id', function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        Comment.findById(req.params.id, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});


//for get token
getToken = function(header){
    if(header && header.authorization){
        var parted = header.authorization.split(' ');
        if(parted.length === 2) {
            debug('First part of authorization' + parted[0]);
            debug('JWT Token part of authorization' + parted[1]);
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};



module.exports = router;