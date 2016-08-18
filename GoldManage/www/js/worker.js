angular.module('worker', [])
	.controller('getWorkerCtrl', function($scope, $stateParams, goalaccAPIservice){
		$scope.workers = goalaccAPIservice.getWorkers();
		$scope.loadWorkerPage = function(){
			var worker = [];
			if($stateParams.id !=-1){
				worker = goalaccAPIservice.getWorker($stateParams.id);
				$scope.no = worker.no;
				$scope.name = worker.name;
				$scope.address = worker.address;
				$scope.phone = worker.phone;
			}
			else{
				$scope.no = '';
				$scope.name = '';
				$scope.address = '';
				$scope.phone = '';
			}
				
		}
	});

	