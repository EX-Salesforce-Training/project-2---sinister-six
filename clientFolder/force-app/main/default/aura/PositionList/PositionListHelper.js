({
	getData : function(component) {
        let qLimit = component.get("v.limit");
        let os = component.get("v.offset");
        let action = component.get("c.getPositionList");
        action.setParams({queryLimit : qLimit, offset : os});
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
                if(response.getReturnValue().length < component.get("v.limit")){
                    component.set("v.isLastPage", true);
                } else{
                    component.set("v.isLastPage", false);
                }
                component.set("v.dataSize", response.getReturnValue().length);
                let wrappedEntry = this.getWrapper(response.getReturnValue());
                component.set('v.mydata', wrappedEntry);
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    },
    
    getWrapper : function(results){
        console.log(results);
        
        let list = [];
        let map = {};
        let baseUrl = 'https://'+location.host+'/';
        for (let i = 0; i < results.length; i++) {
            map = {};
            map.PositionName = results[i].Name;
            map.JobDescription = results[i].Job_Description__c;
            map.Dealership = results[i].Dealership__r.Name;
            map.PositionId = results[i].Id;
            list.push(map);
        }
        console.log(map);
        return list;
        
    }
})