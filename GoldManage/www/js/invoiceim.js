angular.module('invoiceim', [])
	.controller('dpkCtrl', function($scope) {
		//$scope.myDate = new Date();

		$scope.minDate = new Date(
		  $scope.myDate.getFullYear(),
		  $scope.myDate.getMonth() - 2,
		  $scope.myDate.getDate());

		$scope.maxDate = new Date(
		  $scope.myDate.getFullYear(),
		  $scope.myDate.getMonth() + 2,
		  $scope.myDate.getDate());

		$scope.onlyWeekendsPredicate = function(date) {
		var day = date.getDay();
		return day === 0 || day === 6;
		}
	})
	
	.controller('dialogController', function($scope, $mdDialog, $mdMedia) {
		$scope.showCustom = function(event, mode, item) {
			if(item!=null){
				$scope.no = item.no;
				$scope.description = item.description;
				$scope.debit = item.debit;
				$scope.myDate = new Date(item.indate);
			}
			else{
				$scope.no = '';
				$scope.description = '';
				$scope.debit = '';
				$scope.myDate = new Date();
			}
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
			var htmlTemplate = '';
			if(mode === 0)
				htmlTemplate = 'views/add-invoiceim.html?bust=';
			if(mode === 1)
				htmlTemplate = 'views/add-invoiceex.html?bust=';
			if(mode === 2)
				htmlTemplate = 'views/add-reinvoice.html?bust=';
		   $mdDialog.show({
			  clickOutsideToClose: true,
			  scope: $scope,        
			  preserveScope: true,
			  templateUrl: htmlTemplate + Math.random().toString(36).slice(2),
			  parent: angular.element(document.body),
			  fullscreen: useFullScreen,
			  controller: function DialogController($scope, $mdDialog) {
				 $scope.closeDialog = function() {
					$mdDialog.hide();
				 }
			  }
		   });
		   $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
		};
	})
	.controller('getInvoiceCtrl', function($scope, goalaccAPIservice){
		$scope.ininvoices = goalaccAPIservice.getInInvoices();
	})
	.controller('getDataCtrl', function($scope, goalaccAPIservice){
		$scope.acctables = goalaccAPIservice.getAccTables();
	});

	