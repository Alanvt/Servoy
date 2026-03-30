/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECDA0319-DE96-4576-A472-4232B73E83DA"}
 */
var searchText = null;


/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FD52D816-1E0D-4239-8AF2-F8E54E80B9C3"}
 */
function newOrder(event) {
		foundset.newRecord();
	}

	/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"84BC9BBB-62C3-446B-904E-AC433130DC61"}
 */
function onDataChangeCustomer(oldValue, newValue, event) {
	
	// Lookup ship info from customer address
	shipaddress = orders_to_customers.address;
	shipcity = orders_to_customers.city;
	shipregion = orders_to_customers.region;
	shippostalcode = orders_to_customers.postalcode;
	shipcountry = orders_to_customers.country;
	
	return true;
}
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B66CFE39-0DE9-476A-A0D4-B0AF28FC8AC1"}
 */
function addItem(event) {
	
	// create the record 
	orders_to_order_details.newRecord();
	
	// set the quantity default to 1
	orders_to_order_details.quantity = 1;
}
/**
 * Called when the columns data is changed.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param [oldvalue]
 * @param [newvalue]
 * @param {JSEvent} [event]
 * @param {JSRecord} [record]
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"CBCF8530-4ED7-4B8B-8086-E4D068B63C2D"}
 */
function onColumnDataChange(foundsetindex, columnindex, oldvalue, newvalue, event, record) {
	
	// Check if the first column (Product) was changed
	if(columnindex == 0){
		orders_to_order_details.unitprice = 
			orders_to_order_details.order_details_to_products.unitprice;
	}
	return true;
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B917B183-EF1C-4C78-839D-7BAA03114A94"}
 */
function onSearch(event) {
	var search = scopes.svySearch.createSimpleSearch(foundset);
	search.setSearchAllColumns();
	search.setSearchText(searchText);
	search.addSearchProvider('orders_to_customers.companyname');
	search.addSearchProvider('orders_to_order_details.order_details_to_products.productname');
	search.loadRecords(foundset);
}