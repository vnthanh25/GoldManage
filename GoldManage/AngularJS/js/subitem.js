angular.module('subitem', [])
	.controller('getSubItemCtrl', function($scope, $stateParams, goalaccAPIservice){
		$scope.subitems = goalaccAPIservice.getSubItems();
		$scope.loadSubItemPage = function(){
			var subitem = [];
			if($stateParams.id !=-1){
				subitem = goalaccAPIservice.getSubItem($stateParams.id);
				$scope.code = subitem.code;
				$scope.name = subitem.name;
				$scope.itemtype = subitem.itemid;
				$scope.isuse = subitem.isuse;
			}
			else{
				$scope.code = '';
				$scope.name = '';
				$scope.isuse = 0;
			}
				
		}
	});

	