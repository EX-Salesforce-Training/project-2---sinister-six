({
	getInventory : function(component, event, helper) {
		
        //GET MODEL S INVENTORY
        let numOfS = component.get("c.getS");
        numOfS.setCallback(this, function(response) {
            if (response.getState()==="SUCCESS") {
                component.set("{!v.ModelS}", response.getReturnValue());
            } else {
                console.log("Failed to get inventory for this item. State = " + response.getState());
            }
        })
        
        //GET MODEL X INVENTORY
        let numOfX = component.get("c.getX");
        numOfX.setCallback(this, function(response) {
            if (response.getState()=="SUCCESS") {
                component.set("{!v.ModelX}", response.getReturnValue());
            } else {
                console.log("Failed to get inventory for this item.");
            }
        })
        
        //GET MODEL Y INVENTORY
        let numOfY = component.get("c.getY");
        numOfY.setCallback(this, function(response) {
            if (response.getState()=="SUCCESS") {
                component.set("{!v.ModelY}", response.getReturnValue());
            } else {
                console.log("Failed to get inventory for this item.")
            }
        })
        
        //GET MODEL 3 INVENTORY
        let numOf3 = component.get("c.get3");
        numOf3.setCallback(this, function(response) {
            if (response.getState()=="SUCCESS") {
                component.set("{!v.Model3}", response.getReturnValue());
            } else {
                console.log("Failed to get inventory for this item.")
            }
        })
        
        //GET ROADSTER INVENTORY
        let numOfRoadsters = component.get("c.getRoadsters");
        numOfRoadsters.setCallback(this, function(response) {
            if (response.getState()=="SUCCESS") {
                component.set("{!v.Roadster}", response.getReturnValue());
            } else {
                console.log("Failed to get inventory for this item.")
            }
        })
        
        //GET CYBERTRUCK INVENTORY
        let numOfTrux = component.get("c.getTrux");
        numOfTrux.setCallback(this, function(response) {
            if (response.getState()=="SUCCESS") {
                component.set("{!v.Cybertruck}", response.getReturnValue());
            } else {
                console.log("Failed to get inventory for this item.")
            }
        })
        
        //GET SEMI INVENTORY
        let numOfSemis = component.get("c.getSemis");
        numOfSemis.setCallback(this, function(response) {
            if (response.getState()=="SUCCESS") {
                component.set("{!v.Semi}", response.getReturnValue());
            } else {
                console.log("Failed to get inventory for this item.")
            }
        })
        
    $A.enqueueAction(numOfS);
    $A.enqueueAction(numOfX);
    $A.enqueueAction(numOfY);
    $A.enqueueAction(numOf3);
    $A.enqueueAction(numOfRoadsters);
    $A.enqueueAction(numOfTrux);
    $A.enqueueAction(numOfSemis);
        
	},
    
    schedule : function(component, event, helper) {
        helper.fireButtonEvent();
    },
    
    makeAppointment : function(component, event, helper) {
        component.set("v.makeAppt", true);
        console.log("Calling makeAppointment.");
    }
})