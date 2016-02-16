//=======================================================
//client side: productsController
//=======================================================
orderscustomersModule.controller('productsController', function($scope, productsFactory)
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

	$scope.addProduct = function() 
	{
		var exists = false;
		for(var i=0; i < $scope.products.length; i++)
		{
			if ($scope.products[i].name == $scope.newProduct.name)
			{
				$('#error').text('Name in use. Please enter different name.');
				exists = true;
			}
		}

		if (exists == false)
		{
			console.log( $scope.newProduct);
			productsFactory.addProduct($scope.newProduct, function(){
				getProductList();
			});
		}
	}

})