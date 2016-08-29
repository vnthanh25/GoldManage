angular.module('unit', [])
	.controller('getUnitCtrl', function ($scope, $stateParams, goalaccAPIservice) {
    //var units = goalaccAPIservice.getUnits();
    //$.when(units).then(function (result) {
    //    $scope.units = result;
    //});
        goalaccAPIservice.getUnits().done(function(result){
            $scope.units = result;
        });
	    //goalaccAPIservice.getUnits().success(function (u) {
	    //    alert(u[0].code);
        //    $scope.units=u;
        //});
		$scope.loadUnitPage = function(){
			var unit = [];
			if($stateParams.id !=-1){
				unit = goalaccAPIservice.getUnit($stateParams.id);
				$scope.code = unit.code;
				$scope.name = unit.name;
				$scope.isuse = unit.isuse;
				$scope.isdelete = unit.isdelete;
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