({
  helperMethod: function() {},

    fireButtonEvent: function(str) {
    var evt = $A.get("e.c:changeTab");
        evt.setParams({ "Pass_Result": true, 
                       "Pass_String": str});
        evt.fire();
},
    
    cmpNavHelper: function(cmp, str){
        cmp.set("v.renderDealBool", false);
        cmp.set("v.renderTestBool", false);
        cmp.set("v.renderPriceBool", false);
        cmp.set("v.renderHomeBool", false);
        cmp.set("v.renderSchedAppBool", false);
        cmp.set("v.renderCatalogBool", false);
        
        cmp.set("v." + str, true);
    }
});