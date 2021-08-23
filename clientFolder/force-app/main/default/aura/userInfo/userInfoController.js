({
	fetchName : function(component, event, helper) {
		let action = component.get("c.getName");
        action.setParams({});
        action.setCallback(this, function(response) {
            if (response.getState()==="SUCCESS") {
                component.set("v.firstName", response.getReturnValue());
                console.log("Success! The response is " + response.getReturnValue());
            }
        })
        $A.enqueueAction(action);
	}
})