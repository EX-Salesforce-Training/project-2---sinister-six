({
	helperMethod : function() {
		
	},
    
    getDealCallout : function(cmp){
        let action = cmp.get('c.getDealTable');
        console.log(action);
        action.setCallback(this, function(response){
           let status = response.getState();
            if(status === "SUCCESS"){
                let oppList = response.getReturnValue();
                cmp.set("v.dealData", oppList);
                if(oppList.length > 0){
                    cmp.set("v.oppDealerName", oppList[0].Name);
                	this.getOppCallout(cmp, oppList[0].Id);
                }
            }else{
                console.log("error retrieving callback data.");
                console.log(status);
            }
        });
        $A.enqueueAction(action);
    },
    
    getOppCallout : function(cmp, dealId){
        console.log("inside oppcallout helper");
        let action = cmp.get('c.getOppTable');
        action.setParams({dealId: dealId});
        
        action.setCallback(this, function(response){
           let status = response.getState();
            if(status === "SUCCESS"){
                console.log(response.getReturnValue());
                cmp.set("v.oppListData", response.getReturnValue());
            }else{
                console.log("ERROR RETRIEVING ALL DEAL OPPS::getOppCallout function");
            }
        });
        $A.enqueueAction(action);
    }
})