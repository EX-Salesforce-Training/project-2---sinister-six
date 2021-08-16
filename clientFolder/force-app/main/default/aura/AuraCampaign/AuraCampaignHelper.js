({
	helperMethod : function() {
		
	},
    
    getCampCallout : function(cmp){
        let action = cmp.get('c.getCampTable');
        
        action.setCallback(this, function(response){
           let status = response.getState();
            if(status === "SUCCESS"){
                let campList = response.getReturnValue();
                console.log("List retrievef from server ");
                console.log(campList);
                cmp.set("v.campData", campList);

            }else{
                console.log("error retrieving callback data.");
            }
        });
        $A.enqueueAction(action);
    },
    
    saveEdition: function(cmp, draftValues){
        let action = cmp.get('c.updateCamp');
        action.setParams({'cList': draftValues});
        
        action.setCallback(this, function(response){
           let state = response.getState(); 
           cmp.set('v.draftValues', []);
        });
        $A.enqueueAction(action);
    }
})