//=======================================================
//client side: dashboardsController
//=======================================================
orderscustomersModule.controller('dashboardsController', function($scope, customersFactory, ordersFactory, productsFactory)
{
	function dateFormat(dateToFormat)
	{
		var date = new Date(dateToFormat);
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var month = monthNames[date.getMonth()];
		var day = date.getDate();
		var year = date.getFullYear();
		var newDate = month + ' ' + day + ' ' + year;
		return newDate;
	}

	$scope.customers = [];
	
	var getCustomerList = function()
	{
		customersFactory.getCustomers(function(data)
		{
			for(var x in data)
			{
				data[x].created_at = dateFormat(data[x].created_at);
			}
			$scope.customers = data;
		})
	}

	getCustomerList();

	$scope.products = [];
	
	var getProductList = function()
	{
		productsFactory.getProducts(function(data)
		{
			for(var x in data)
			{
				data[x].created_at = dateFormat(data[x].created_at);
			}
			$scope.products = data;
		})
	}

	getProductList();

	$scope.orders = [];
	var getOrderList = function()
	{
		ordersFactory.getOrders(function(data)
		{
			for(var x in data)
			{
				data[x].created_at = dateFormat(data[x].created_at);
			}
			$scope.orders = data;
		})
	}

	getOrderList();


})