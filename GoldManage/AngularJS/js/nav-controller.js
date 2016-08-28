angular.module('navController', [])
	.controller('nav', function($scope, $state) {
		$scope.title = 'Goal Accounting';

		// returns true if the current router url matches the passed in url
		// so views can set 'active' on links easily
		$scope.isUrl = function(url) {
			if (url === '#') return false;
			return ('#' + $state.$current.url.source + '/').indexOf(url + '/') === 0;
		};

		$scope.pages = [
			{
				name: 'Hệ thống',
				url: '#',
				subPages: [
					{
						name: 'Tài khoản',
						url: '#/acc-table'
					},
					{},
					{
						name: 'Đơn vị tính',
						url: '#/unit'
					}
				]
			},
			{
				name: 'Danh mục',
				url: '#',
				subPages: [
					{
						name: 'Loại hàng',
						url: '#/item'
					},
					{},
					{
						name: 'Mặt hàng',
						url: '#/subitem'
					},
					{},
					{
						name: 'Kho hàng',
						url: '#/store'
					},
					{},
					{
						name: 'Đối tượng',
						url: '#/supplier'
					},
					{}
					/*
					{
						name: 'Khách hàng',
						url: '#/customer'
					},
					{},
					{
						name: 'Thợ',
						url: '#/worker'
					}
					*/
				]
			},
			{
				name: 'Quản lý kho',
				url: '#',
				subPages: [
					{
						name: 'phiếu nhập kho',
						url: '#/invoiceim'
					},
					{},
					{
						name: 'phiếu xuất kho',
						url: '#/invoiceex'	
					},
					{},
					{
						name: 'phiếu tái nhập kho',
						url: '#/reinvoice'		
					}
				]
			},
			{
				name: 'Thanh toán',
				url: '#/blog'
			},
			{
				name: 'Báo cáo',
				url: '#',
				subPages: [
					{
						name: 'Thẻ kho',
						url: '#inventorycard'
					}
				]
			}
			/*
			{
				name: 'UI',
				url: '#/ui'
			},
			{
				name: 'Theme Example',
				url: '#/theme'
			},
			{
				name: 'Dropdown Example',
				url: '#',
				subPages: [
					{
						name: 'About',
						url: '#/about'
					},
					{},
					{
						name: 'Header',
					},
					{
						name: 'Contact',
						url: '#/contact'
					}
				]
			}
			*/
		]
	});
	