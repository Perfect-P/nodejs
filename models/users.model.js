var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	phone: String,
	password: String,
	avatar: String
});

var user = mongoose.model('user', userSchema,'users'); // para1: ten model. para2: ten schema, para3: ten collection

module.exports = user;