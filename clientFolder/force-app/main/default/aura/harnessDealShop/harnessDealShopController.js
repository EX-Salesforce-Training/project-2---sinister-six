({
	myAction : function(component, event, helper) {
		
	},
    
    getValueFromApplicationEvent : function(cmp, event) {
        var ShowResultValue = event.getParam("Pass_Result");
        var cmpString = event.getParam("Pass_String");
        // set the handler attributes based on event data
        console.log("showresult: " + ShowResultValue);
        console.log("cmpString: " + cmpString);
        
        cmp.set("v.dealRenderBool", false);
        cmp.set("v.testRenderBool", false);
        
        cmp.set("v." + cmpString, ShowResultValue);
    }
})