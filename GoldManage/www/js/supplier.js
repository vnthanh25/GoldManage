angular.module('supplier', [])
	.controller('getSupplierCtrl', function($scope, $stateParams, goalaccAPIservice){
		$scope.suppliers = goalaccAPIservice.getSuppliers();
		$scope.loadSupplierPage = function(){
			var supplier = [];
			if($stateParams.id !=-1){
				supplier = goalaccAPIservice.getSupplier($stateParams.id);
				$scope.no = supplier.no;
				$scope.name = supplier.name;
				$scope.address = supplier.address;
				$scope.phone = supplier.phone;
			}
			else{
				$scope.no = '';
				$scope.name = '';
				$scope.address = '';
				$scope.phone = '';
			}
				
		}
	});

	