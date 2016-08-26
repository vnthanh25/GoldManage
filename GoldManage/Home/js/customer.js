angular.module('customer', [])
	.controller('getCustomerCtrl', function($scope, $stateParams, goalaccAPIservice){
		$scope.customers = goalaccAPIservice.getCustomers();
		$scope.loadCustomerPage = function(){
			var customer = [];
			if($stateParams.id !=-1){
				customer = goalaccAPIservice.getCustomer($stateParams.id);
				$scope.no = customer.no;
				$scope.name = customer.name;
				$scope.address = customer.address;
				$scope.phone = customer.phone;
			}
			else{
				$scope.no = '';
				$scope.name = '';
				$scope.address = '';
				$scope.phone = '';
			}
				
		}
	});

	