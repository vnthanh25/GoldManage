angular.module('invoiceim', [])
	.controller('imdpkCtrl', function($scope) {
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
	
	.controller('imdialogController', function($scope, $mdDialog, $mdMedia, goalaccAPIservice) {
		$scope.showCustom = function(event, item) {
			$scope.bindInvoiceDetail(item);
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
			var htmlTemplate = 'views/add-invoiceim.html?bust=';
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
		
		$scope.bindInvoiceDetail = function(item){
			if(item!=null){
				$scope.no = item.no;
				$scope.description = item.description;
				$scope.debit = item.debit;
				$scope.totalweight = item.totalweight;
				$scope.total = item.total;
				$scope.myDate = new Date(item.indate);
				$scope.object = item.objectid;
				$scope.ininvoicedetails = goalaccAPIservice.getInInvoiceDetails(item.id);
				//alert($scope.ininvoicedetails[0].no);
				//alert($scope.ininvoicedetails[1].no);
				$scope.itemno = '';
				$scope.name = '';
				$scope.weightO = 0;
				$scope.weight = 0;
				$scope.price = 0;
				$scope.amount = 0;
			}
			else{
				$scope.no = '';
				$scope.description = '';
				$scope.debit = '';
				$scope.myDate = new Date();
			}
		}
		//$scope.itemno = '';
		//$scope.name = '';
		//$scope.weight = '';
		$scope.flag = true;
		$scope.loadItemDetail = function(itemdetail){
			if(itemdetail!=null){
				$scope.flag = true;
				$scope.itemno = itemdetail.no;
				$scope.name = itemdetail.name;
				$scope.weightO = itemdetail.weightO;
				$scope.weight = itemdetail.weight;
				$scope.price = itemdetail.price;
				$scope.amount = itemdetail.amount;
				$scope.itemtype = itemdetail.itemtype;
			}
			else{
				$scope.itemno = '';
				$scope.name = '';
				$scope.weightO = 0;
				$scope.weight = 0;
				$scope.price = 0;
				$scope.amount = 0;
			}
		}
		$scope.getItemName = function(){
			$scope.flag = false;
		}
		$scope.cancelForm = function(){
			alert('hi');
			$scope.itemno = '';
			$scope.name = '';
			$scope.weight = 0;
			$scope.price = 0;
			$scope.amount = 0;
		}
	})
	.controller('getInvoiceCtrl', function($scope, goalaccAPIservice){
		$scope.ininvoices = goalaccAPIservice.getInInvoices();
		$scope.subitems = goalaccAPIservice.getSubItems();
		
	});
	