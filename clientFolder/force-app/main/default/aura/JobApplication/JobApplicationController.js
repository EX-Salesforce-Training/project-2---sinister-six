({
    appRecordFormSuccess: function(component, event, helper) {
        component.set("v.reloadAppForm", false);
        
        try {
            component.find("notifLib").showToast({
                variant: "success",
                title: "Job Application Created",
                message: "Record ID: " + event.getParam("id")
            });
        } catch (e) {
            alert("Application successfully submitted!");
        }
        component.set("v.reloadAppForm", true);
    },
    
    candRecordFormSuccess: function(component, event, helper) {
        component.set("v.reloadCandForm", false);        
        try {
            component.find("notifLib").showToast({
                variant: "success",
                title: "Candidate Record Created",
                message: "Record ID: " + event.getParams().response.id
            });
        } catch (e) {
            alert("Candidate successfully created!");
        }
        component.set("v.reloadCandForm", true);
        component.set("v.formCandidate", event.getParams().response.id);       
    },
    
    candRecordSubmit: function(component, event, helper){
        event.preventDefault();
        const fields = event.getParam('fields');
        let fullname = fields.First_Name__c + ' ' + fields.Last_Name__c;
        fields.Name = fullname;
        component.find('f2').submit(fields);                        
    }
})