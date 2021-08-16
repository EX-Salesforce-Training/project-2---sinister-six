({
	getCampUrlHelper : function(cmp) {
		let action = cmp.get('c.getCampUrl');
        
        action.setCallback(this, function(response){
           let state = response.getState();
            if(state === "SUCCESS"){
                console.log("urlattr: " + response.getReturnValue());
                cmp.set("v.urlAttr", response.getReturnValue());
            }
            else
                console.log("URL Callback error !!!");
        });
        $A.enqueueAction(action);
	}
})