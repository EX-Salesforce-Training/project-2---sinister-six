({
	getAppts : function(component, event, helper) {
        
        //Get Sales appointments
		component.set("v.salesCols", [
            {label: "Appointment Date/Time", fieldName: "Appointment_Date_Time__c", type:"date", typeAttributes:{weekday: "long",year: "numeric",month: "long",day: "2-digit",hour: "2-digit",minute: "2-digit"}, wrapText:true},
            {label: "Phone Number", fieldName: "Phone", type: "Phone"},
            {label: "Email Address", fieldName: "Email", type: "Email"}
        ]);
        let salesAction = component.get("c.fetchSales");
        salesAction.setParams({});
        salesAction.setCallback(this, function(response){
            if (response.getState() === "SUCCESS") {
                if (response.getReturnValue().length > 0) {
                	component.set("v.salesAppts", response.getReturnValue());
                    component.set("v.scheduledSales", true);
                }
            }
        });
        $A.enqueueAction(salesAction);
        
        //Get Shop appointments
        component.set("v.shopCols", [
            {label: "Appointment Date/Time", fieldName: "Appointment_Date_Time__c", type:"date", typeAttributes:{weekday: "long",year: "numeric",month: "long",day: "2-digit",hour: "2-digit",minute: "2-digit"},wrapText:true},
            {label: "Issue", fieldName: "Name", type:"String", wrapText:true},
            {label: "Model", fieldName: "Vehicle_Model__c", type:"String"},
            {label: "Service", fieldName: "Service_Type__c", type:"String"},
        ]);
            let shopAction = component.get("c.fetchShop");
            shopAction.setParams({});
            shopAction.setCallback(this, function(response) {
            	if(response.getState()==="SUCCESS") {
            		if (response.getReturnValue().length > 0) {
            			component.set("v.shopAppts", response.getReturnValue());
            			component.set("v.scheduledShop", true);
            		}
            }
            });
            $A.enqueueAction(shopAction);
	}
})