const mongoose = require('mongoose');

mongoose.set('debug',true);

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/vote", { useNewUrlParser: true });

module.exports.User = require('./user');
module.exports.Poll = require('./poll');