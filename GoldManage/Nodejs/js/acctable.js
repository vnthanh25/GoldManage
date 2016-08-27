angular.module('acctable', [])
	.controller('getAccTblCtrl', function($scope, $stateParams, goalaccAPIservice){
		$scope.acctables = goalaccAPIservice.getAccTables();
		/*
		var acctbl = [];
		$scope.getAccTblById = function(atbl){
			acctbl = atbl;
			alert(acctbl.code);
			window.location = '#/acc-table/add';
		}
		*/
		$scope.loadAccTblPage = function(){
			var acctbl = [];
			if($stateParams.id !=-1){
				acctbl = goalaccAPIservice.getAccTable($stateParams.id);
				$scope.code = acctbl.code;
				$scope.name = acctbl.name;
				$scope.isuse = acctbl.isuse;
				$scope.isdelete = acctbl.isdelete;
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