({
    getData : function(component) {
        let qLimit = component.get("v.limit");
        let os = component.get("v.offset");
        let sort = component.get("v.sortedBy");
        let dir = component.get("v.sortDirection");
        let action = component.get("c.getPriceBookEntryList");
        action.setParams({queryLimit : qLimit, offset : os, sortOrder : sort, sortDirection : dir});
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
            map.UnitPrice = results[i].UnitPrice;
            map.ProductName = results[i].Product2.Name;
            map.ProductType = results[i].Product2.RecordType.Name;
            map.PricebookName = results[i].Pricebook2.Name;
            map.ProductId = results[i].Product2Id;
            map.ProductUrl = baseUrl + results[i].Product2Id;
            map.PricebookUrl = baseUrl + results[i].Pricebook2Id;
            list.push(map);
        }
        console.log(map);
        return list;
        
    },
    
    sortData: function (component, fieldName, sortDirection) {
        var data = component.get("v.mydata");
        var reverse = sortDirection !== 'asc';
        //sorts the rows based on the column header that's clicked
        data.sort(this.sortBy(fieldName, reverse))
        component.set("v.mydata", data);
    },
    sortBy: function (field, reverse, primer) {
        var key = primer ?
            function(x) {return primer(x[field])} :
            function(x) {return x[field]};
        //checks if the two rows should switch places
        reverse = !reverse ? 1 : -1;
        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    }
})