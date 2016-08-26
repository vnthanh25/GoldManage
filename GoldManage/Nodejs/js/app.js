(function() {
	var app = angular.module('app', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ngMaterial',
							'navController', 'invoiceim', 'invoiceex', 'acctable', 'item', 'supplier',
							'customer', 'worker', 'goalapp.services'])

	// define for requirejs loaded modules
	define('app', [], function() { return app; });

	// function for dynamic load with requirejs of a javascript module for use with a view
	// in the state definition call add property `resolve: req('/views/ui.js')`
	// or `resolve: req(['/views/ui.js'])`
	// or `resolve: req('views/ui')`
	function req(deps) {
		if (typeof deps === 'string') deps = [deps];
		return {
			deps: function ($q, $rootScope) {
				var deferred = $q.defer();
				require(deps, function() {
					$rootScope.$apply(function () {
						deferred.resolve();
					});
					deferred.resolve();
				});
				return deferred.promise;
			}
		}
	}

	app.config(function($stateProvider, $urlRouterProvider, $controllerProvider){
		var origController = app.controller
		app.controller = function (name, constructor){
			$controllerProvider.register(name, constructor);
			return origController.apply(this, arguments);
		}

		var viewsPrefix = 'Nodejs/views/';

		// For any unmatched url, send to /
		$urlRouterProvider.otherwise("/")

		$stateProvider
			// you can set this to no template if you just want to use the html in the page
			.state('home', {
				url: "/",
				templateUrl: viewsPrefix + "main.html",
				data: {
					pageTitle: 'main'
				}
			})
			.state('acc-table', {
				url: "/acc-table",
				templateUrl: viewsPrefix + "acc-table.html",
				data: {
					pageTitle: 'Account Table'
				}
			})
			.state('acc-table.add', {
				url: "/add/:id",
				templateUrl: viewsPrefix + "add-acctable.html",
			})
			.state('item', {
				url: "/item",
				templateUrl: viewsPrefix + "itemgroup.html",
				data: {
					pageTitle: 'item'
				}
			})
			.state('item.add', {
				url: "/add/:id",
				templateUrl: viewsPrefix + "add-itemgroup.html",
			})
			.state('supplier', {
				url: "/supplier",
				templateUrl: viewsPrefix + "supplier.html",
				data: {
					pageTitle: 'Nhà cung cấp'
				}
			})
			.state('supplier.add', {
				url: "/add/:id",
				templateUrl: viewsPrefix + "add-supplier.html",
			})
			.state('customer', {
				url: "/customer",
				templateUrl: viewsPrefix + "customer.html",
				data: {
					pageTitle: 'Khách hàng'
				}
			})
			.state('customer.add', {
				url: "/add/:id",
				templateUrl: viewsPrefix + "add-customer.html",
			})
			.state('worker', {
				url: "/worker",
				templateUrl: viewsPrefix + "worker.html",
				data: {
					pageTitle: 'thợ'
				}
			})
			.state('worker.add', {
				url: "/add/:id",
				templateUrl: viewsPrefix + "add-worker.html",
			})
			.state('invoiceim', {
				url: "/invoiceim",
				templateUrl: viewsPrefix + "invoiceim.html",
				data: {
					pageTitle: 'Phiếu nhập kho'
				}
			})
			.state('invoiceim.add', {
				url: "/add",
				templateUrl: viewsPrefix + "add-invoiceim.html",
			})
			.state('invoiceex', {
				url: "/invoiceex",
				templateUrl: viewsPrefix + "invoiceex.html",
				data: {
					pageTitle: 'Phiếu xuất kho'
				}
			})
			.state('invoiceex.add', {
				url: "/add",
				templateUrl: viewsPrefix + "add-invoiceex.html",
			})
			.state('reinvoice', {
				url: "/reinvoice",
				templateUrl: viewsPrefix + "reinvoice.html",
				data: {
					pageTitle: 'Phiếu tái nhập kho'
				}
			})
			.state('reinvoice.add', {
				url: "/add",
				templateUrl: viewsPrefix + "add-reinvoice.html",
			})
			.state('contact', {
				url: "/contact",
				templateUrl: viewsPrefix + "contact.html",
				data: {
					pageTitle: 'Contact'
				}
			})
			.state('contact.list', {
				url: "/list",
				templateUrl: viewsPrefix + "contact-list.html",
				controller: function($scope){
					$scope.things = ["A", "Set", "Of", "Things"];
				}
			})
			.state('theme', {
				url: "/theme",
				templateUrl: viewsPrefix + "theme.html",
				data: {
					pageTitle: 'Theme Example'
				}
			})
			.state('blog', {
				url: "/blog",
				templateUrl: viewsPrefix + "blog.html",
				data: {
					pageTitle: 'Blog'
				}
			})
			.state('grid', {
				url: "/grid",
				templateUrl: viewsPrefix + "grid.html",
				data: {
					pageTitle: 'Grid'
				}
			})
			.state('ui', {
				url: "/ui",
				resolve: req('/views/ui.js'),
				templateUrl: viewsPrefix + "ui.html",
				data: {
					pageTitle: 'UI'
				}
			})
	})
	.directive('updateTitle', ['$rootScope', '$timeout',
		function($rootScope, $timeout) {
			return {
				link: function(scope, element) {
					var listener = function(event, toState) {
						var title = 'Project Name';
						if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle + ' - ' + title;
						$timeout(function() {
							element.text(title);
						}, 0, false);
					};

					$rootScope.$on('$stateChangeSuccess', listener);
				}
			};
		}
	]);
}());