angular.module('item', [])
	.controller('getItemCtrl', function($scope, $stateParams, goalaccAPIservice){
		$scope.items = goalaccAPIservice.getItems();
		$scope.loadItemPage = function(){
			var item = [];
			if($stateParams.id !=-1){
				item = goalaccAPIservice.getItem($stateParams.id);
				$scope.code = item.code;
				$scope.name = item.name;
				$scope.isuse = item.isuse;
			}
			else{
				$scope.code = '';
				$scope.name = '';
				$scope.isuse = 0;
			}
				
		}
	});

	