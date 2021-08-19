({
    init: function (component, event, helper) {
        component.set("v.limit", "10");
        component.set("v.offset", "0");
        component.set('v.mycolumns', [            
            { label: 'Position Name', fieldName: 'PositionName', type: 'text', sortable: 'true', cellAttributes: { alignment: 'left' }},
            { label: 'Job Description', fieldName: 'JobDescription', type: 'text', cellAttributes: { alignment: 'left' }},
            { label: 'Dealership', fieldName: 'Dealership', type: 'text', sortable: 'true', cellAttributes: { alignment: 'left' }},            
        ]);
        helper.getData(component);
    },
    
    updateColumnSorting: function (component, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        // assign the latest attribute with the sorted column fieldName and sorted direction
        component.set("v.sortedBy", fieldName);
        component.set("v.sortDirection", sortDirection);
        helper.sortData(component, fieldName, sortDirection);
    },
    
    handleNext : function(component, event, helper) { 
        var pageNumber = component.get("v.pageNumber");
        var os = component.get("v.offset");
        component.set("v.pageNumber", pageNumber+1);
        component.set("v.offset", os+10);
        helper.getData(component);
    },
     
    handlePrev : function(component, event, helper) {        
        var pageNumber = component.get("v.pageNumber");
        var os = component.get("v.offset");
        component.set("v.pageNumber", pageNumber-1);
        component.set("v.offset", os-10);
        helper.getData(component);
    }
    
    
})