({
    init: function (component, event, helper) {
        component.set("v.limit", "10");
        component.set("v.offset", "0");
        component.set('v.mycolumns', [            
            { label: 'Product Name', fieldName: 'ProductUrl', type: 'url', sortable: 'true', typeAttributes: {
                label: { 
                    fieldName: 'ProductName' 
                },
                target : '_blank'
            }},
            { label: 'Unit Price', fieldName: 'UnitPrice', type: 'currency', sortable: 'true'},
            { label: 'Product Type', fieldName: 'ProductType', type: 'text', sortable: 'true'},
            { label: 'Pricebook', fieldName: 'PricebookUrl', type: 'url', sortable: 'true', typeAttributes: {
                label: { 
                    fieldName: 'PricebookName' 
                },
                target : '_blank'
            }}    
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