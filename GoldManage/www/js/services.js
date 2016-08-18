angular.module('goalapp.services', [])
  .factory('goalaccAPIservice', function() {
	var acctable = [
			{ id: 1, code: '111', name: 'Tiền mặt', isuse: 1},
			{ id: 2, code: '222', name: 'Tiền gửi ngân hàng', isuse: 1}
		];	
	var item = [
			{ id: 1, code: '9999', name: 'vàng 9999', isuse: 1},
			{ id: 2, code: '18k', name: 'Vàng 18', isuse: 1}
		];
	var supplier = [
			{ id: 1, no: 'NCC001', name: 'Nguyễn Thế Quang', address: '1, đường số 1, khu chợ phú lâm, p.13, q.6, tphcm', phone: '0989990017'},
			{ id: 2, no: 'NCC002', name: 'Nguyễn Ngọc Thùy Linh', address: '1, đường số 1, khu chợ phú lâm, p.13, q.6, tphcm', phone: '0938999012'}
		];
	var customer = [
			{ id: 1, no: 'KH001', name: 'Nguyễn Thế Quang', address: '1, đường số 1, khu chợ phú lâm, p.13, q.6, tphcm', phone: '0989990017'},
			{ id: 2, no: 'KH002', name: 'Nguyễn Ngọc Thùy Linh', address: '1, đường số 1, khu chợ phú lâm, p.13, q.6, tphcm', phone: '0938999012'}
		];
	var worker = [
			{ id: 1, no: 'W001', name: 'Nguyễn Thế Quang', address: '1, đường số 1, khu chợ phú lâm, p.13, q.6, tphcm', phone: '0989990017'},
			{ id: 2, no: 'W002', name: 'Nguyễn Ngọc Thùy Linh', address: '1, đường số 1, khu chợ phú lâm, p.13, q.6, tphcm', phone: '0938999012'}
		];
	var ininvoice = [
			{ id: 1, no: 'N0001', indate: '8/15/2016', description: 'hàng mua vào 1', debit: 1, weight: 1.7, total: 2000},
			{ id: 2, no: 'N002', indate: '9/8/2016', description: 'hàng mua vào 2', debit: 2, weight: 2.7, total: 4000}
		];
	var invoicedetail = [
			{ id: 1, no: 'H0001', name: 'vàng rồng', weight: 1.7, itemtype: 1, ininvoiceid: 1},
			{ id: 1, no: 'H0002', name: 'vàng miếng', weight: 2.7, itemtype: 2, ininvoiceid: 1}
		];	
		
    return {
		getAccTables: function() {
		  return acctable;
		},
		getItems: function(){
			return item;
		},
		getSuppliers: function(){
			return supplier;
		},
		getCustomers: function(){
			return customer;
		},
		getWorkers: function(){
			return worker;
		},
		getInInvoices: function(){
			return ininvoice;
		},
		getInInvoiceDetails: function(){
			return invoicedetail;
		},
		getAccTable: function(id){
			for(var i=0;i<acctable.length; i++)
				if(acctable[i].id == id)
					return acctable[i];
		},
		getItem: function(id){
			for(var i=0;i<item.length; i++)
				if(item[i].id == id)
					return item[i];
		},
		getSupplier: function(id){
			for(var i=0;i<supplier.length; i++)
				if(supplier[i].id == id)
					return supplier[i];
		},
		getCustomer: function(id){
			for(var i=0;i<customer.length; i++)
				if(customer[i].id == id)
					return customer[i];
		},
		getWorker: function(id){
			for(var i=0;i<worker.length; i++)
				if(worker[i].id == id)
					return worker[i];
		}
	};
  });