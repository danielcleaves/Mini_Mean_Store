//=======================================================
//product model
//=======================================================
var mongoose = require('mongoose');
//=======================================================
//ProductSchema
//=======================================================

var ProductSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	url: {type: String},
	description: {type: String},
	qty: {type: Number}
});

mongoose.model('Product', ProductSchema);
