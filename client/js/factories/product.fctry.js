//=======================================================
//productsFactory -- New Orders
//=======================================================
orderscustomersModule.factory('productsFactory', function($http)
{
	var factory = {};

	factory.getProducts = function (callback)
	{
		$http.get('/getProducts').success(function(output){ callback(output); });
	}

	factory.addProduct = function(data, callback)
	{
		$http.post('/addProduct', data).success(function(output){ callback(output); });
	}

	return factory;
});