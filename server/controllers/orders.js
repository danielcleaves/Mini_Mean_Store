//=======================================================
//=======================================================
//attach order.js model
//=======================================================
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
//=======================================================
//orders.js Controller
//=======================================================
module.exports = (function() 
{
	return {
		getOrders: function(req, res)
		{
			Order.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		addNewOrder: function(req, res)
		{
			var order = new Order(req.body);
			console.log(req.body);
			Product.findOne({name: req.body.product}, function(err, results) {				
				if(err) {
					console.log(err);
				} else {
					results.qty-=req.body.qty;
					results.save();
				}
			})
  			order.save(function(err, record){
  				if(err)
  				{
  					res.json({status:'failed', err:err})
  				}else
  				{
  					res.json({status:'success'})
  				}
  			})
		}
	}
})();