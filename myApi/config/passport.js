var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
//load user model

var User = require('../models/user') //^
var config = require('../config/database') //get db config file

module.exports = function(passport){
    var opts={
        jwtFromRequest:ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey :config.secret
    };
    passport.use(new JwtStrategy(opts,function(jwt_payload, done){
        User.findOne({ie: jwt_payload.id}, function(err,user){
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}