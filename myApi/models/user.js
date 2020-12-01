var mongoose = require('mongoose');
var bycrypt = require('bcrypt-nodejs');


//user model for back end api

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['reader', 'creator', 'editor'],
        default: 'editor'
    }
},
    {timestamps:true});

//password hashing code

UserSchema.pre('save', function(next) {
    var user = this;
    var SALT_FACTOR = 5;
    if (!user.isModified('password')) {
        return next();
    }
    bycrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if (err) {
            return next(err);
        }
        bycrypt.hash(user.password, salt, null, function(err, hash){
            if(err) {
                return next(err);
            }

        user.password = hash;
        next();
    });
  });
});

//for logging in - compare password

UserSchema.methods.comparePassword =  function(passwordAttempt, cb){
 bycrypt.compare(passwordAttempt, this.password, function(err, isMatch){
     if(err){
         return cb(err);
     } else {
         cb(null,isMatch);
     }
    });
}



module.exports = mongoose.model('user', UserSchema);