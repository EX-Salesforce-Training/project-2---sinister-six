({
	resetFields : function(component, event, helper) {
		component.find('oppField').forEach(function(f) {
            f.reset();
        });
        component.set("v.oppCreated", false);
	},
    
    createOpp : function(component, event, helper) {
        component.set("v.oppCreated", true);
    }
})