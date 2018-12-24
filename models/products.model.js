var mongoose = require('mongoose');


var productSchema = new mongoose.Schema({
	name: String,
	image: String,
	decription: String
});

var product = mongoose.model('product', productSchema,'products'); // para1: ten model. para2: ten schema, para3: ten collection

module.exports = product;