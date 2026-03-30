/**
 * @properties={type:6,typeid:36,uuid:"A129FDBD-8AF5-4BBA-9714-851454972327"}
 */
 function order_total()
 {
 	var sum = 0;
 	for (var i = 1; i <= orders_to_order_details.getSize(); i++) {
 		var record = orders_to_order_details.getRecord(i);
 		sum += Number(record.subtotal) || 0;
 	}
 	return sum;
 }
