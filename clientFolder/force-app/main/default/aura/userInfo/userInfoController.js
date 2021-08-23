({
	fetchName : function(component, event, helper) {
		let action = component.get("c.getName");
        action.setParams({});
        action.setCallback(this, function(response) {
            if (response.getState()==="SUCCESS") {
                if (response.getReturnValue().length > 0 && response.getReturnValue() != "TeslaPortal") {
                	component.set("v.firstName", response.getReturnValue());
                	console.log("Success! The response is " + response.getReturnValue());
                } else if (response.getReturnValue() == "TeslaPortal") {
                    component.set("v.firstName", "Guest User");
                    console.log("Found the default Username! Defaulting as Guest User");
                }
            } else {
                   	component.set("v.firstName", "Guest User");
                    console.log("Response failed. Defaulting as Guest User");
            }
        })
        $A.enqueueAction(action);
	}
})