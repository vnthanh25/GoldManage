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
			}
			else{
				$scope.code = '';
				$scope.name = '';
				$scope.isuse = 0;
			}
				
		}
	});