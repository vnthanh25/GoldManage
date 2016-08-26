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
			{ id: 1, no: 'DT001', name: 'Nguyễn Thế Quang', address: '1, đường số 1, khu chợ phú lâm, p.13, q.6, tphcm', phone: '0989990017'},
			{ id: 2, no: 'DT002', name: 'Nguyễn Ngọc Thùy Linh', address: '1, đường số 1, khu chợ phú lâm, p.13, q.6, tphcm', phone: '0938999012'},
			{ id: 3, no: 'DT003', name: 'Nguyễn Ngọc Phương Uyen', address: '1, đường số 1, khu chợ phú lâm, p.13, q.6, tphcm', phone: '0938999012'},
			{ id: 4, no: 'DT004', name: 'Nguyễn Khánh Ngọc', address: '1, đường số 1, khu chợ phú lâm, p.13, q.6, tphcm', phone: '0938999012'}
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
			{ id: 1, no: 'N0001', indate: '8/15/2016', description: 'hàng mua vào 1', debit: 1, totalweight: 5.7, total: 770, objectid: 1},
			{ id: 2, no: 'N002', indate: '9/8/2016', description: 'hàng mua vào 2', debit: 2, totalweight: 10, total: 3000, objectid: 2}
		];
	var invoicedetail = [
			{ id: 1, no: 'HN0001', name: 'vàng rồng', weight: 3.7, itemtype: 1, ininvoiceid: 1, price: 100, amount: 370},
			{ id: 1, no: 'HN0002', name: 'vàng miếng', weight: 2.0, itemtype: 1, ininvoiceid: 1, price: 200, amount: 400},
			{ id: 1, no: 'HN0003', name: 'vàng khuong', weight: 10, itemtype: 2, ininvoiceid: 2, price: 300, amount: 3000}
		];
	var exinvoice = [
			{ id: 1, no: 'X0001', exdate: '8/15/2016', description: 'hàng xuất ra 1', credit: 1, totalweight: 5.7, total: 770, objectid: 1},
			{ id: 2, no: 'X002', exdate: '9/8/2016', description: 'hàng xuất ra 2', credit: 2, totalweight: 10, total: 3000, objectid: 2}
		];
	var exinvoicedetail = [
			{ id: 1, no: 'HX0001', name: 'vàng rồng', weight: 3.7, itemtype: 1, exinvoiceid: 1, price: 100, amount: 370},
			{ id: 1, no: 'HX0002', name: 'vàng miếng', weight: 2.0, itemtype: 1, exinvoiceid: 1, price: 200, amount: 400},
			{ id: 1, no: 'HX0003', name: 'vàng khuong', weight: 10, itemtype: 2, exinvoiceid: 2, price: 300, amount: 3000}
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
		getInInvoiceDetails: function(ininvoiceid){
			var invoicedetailbuff = [];
			for(var i=0;i<invoicedetail.length; i++)
				if(invoicedetail[i].ininvoiceid == ininvoiceid)
					invoicedetailbuff.push(invoicedetail[i]);
			return invoicedetailbuff;
		},
		getExInvoices: function(){
			return exinvoice;
		},
		getExInvoiceDetails: function(exinvoiceid){
			var invoicedetailbuff = [];
			for(var i=0;i<exinvoicedetail.length; i++)
				if(exinvoicedetail[i].exinvoiceid == exinvoiceid)
					invoicedetailbuff.push(exinvoicedetail[i]);
			return invoicedetailbuff;
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