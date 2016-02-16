//=======================================================
//Routes File
//=======================================================
module.exports = function(app)
{
//=======================================================
//require any controllers you may need
//=======================================================
var products = require('./../controllers/products.js');
var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
//=======================================================
	
	//root route
	app.get('/', function(req, res) 
	{
		res.render('index');
	})


	//products.html routes
	app.get('/getProducts', function(req, res)
	{
		products.getProducts(req, res);
	})
	app.post('/addProduct', function(req, res)
	{
		products.addNewProduct(req, res);
	})


	//customers.html routes
	app.get('/getCustomers', function(req, res)
	{
		customers.getCustomers(req, res);
	})
	app.post('/addCustomer', function(req, res)
	{
		customers.addNewCustomer(req, res);
	})
	app.delete('/destroyCustomer/:id', function(req, res){
		customers.destroyCustomer(req, res);
	})

	//orders.html routes
	app.post('/addOrder', function(req, res)
	{
		orders.addNewOrder(req,res);
	})
	app.get('/getOrders', function(req, res)
	{
		orders.getOrders(req, res);
	})

	//settings.html routes
};