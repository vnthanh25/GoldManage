angular.module('store', [])
	.controller('getStoreCtrl', function($scope, $stateParams, goalaccAPIservice){
		$scope.stores = goalaccAPIservice.getStores();
		$scope.loadStorePage = function(){
			var store = [];
			if($stateParams.id !=-1){
				store = goalaccAPIservice.getStore($stateParams.id);
				$scope.code = store.code;
				$scope.name = store.name;
				$scope.isuse = store.isuse;
				$scope.isdelete = store.isdelete;
			}
			else{
				$scope.code = '';
				$scope.name = '';
				$scope.isuse = false;
			}
				
		}
		$scope.remove = function(){
			var oldList = $scope.acctables;
			$scope.acctables = [];
			angular.forEach(oldList, function(acctbl){
				if(!acctbl.isdelete)
					$scope.acctables.push(acctbl);
			});
		}
		
	})
	.controller('getAccTblDetailCtrl', function($scope, goalaccAPIservice){
		$scope.add = function(){
			a = angular.copy(goalaccAPIservice.getAccTables());
			var i = a[a.length-1].id + 1;
			a.push({id: i, code:$scope.code, name:$scope.name, isuse:$scope.isuse, isdelete:false});
			angular.copy(a, goalaccAPIservice.getAccTables())
			$scope.code = '';
			$scope.name = '';
			$scope.isuse = false;	
		}
	});