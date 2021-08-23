({
    onCustomLoad: function(component, event, helper){
        helper.setAccessByProfile(component);
    },

  homeClick: function(component, event, helper) {
    //helper.fireButtonEvent("testRenderBool");
    helper.cmpNavHelper(component, "renderHomeBool");
  },
    
    dealershipClick: function(component, event, helper){
        //helper function used to fire event that rendered
        //the cmp in harness app. not used with experience
        //builder.
        //helper.fireButtonEvent("dealRenderBool");
        helper.cmpNavHelper(component, "renderDealBool");
        //$A.get("e.force:logout").fire();
        //window.location.replace("https://auratesla-developer-edition.na162.force.com/servlet/networks/switch?startURL=%2Fsecur%2Flogout.jsp");
        //window.location.href("https://auratesla-developer-edition.na162.force.com/s/");
    },
    
    campClick: function(component, event, helper){
        //helper.fireButtonEvent("testRenderBool");
        helper.cmpNavHelper(component, "renderTestBool");
    },
    
    schedAppClick: function(component, event,helper){
        helper.cmpNavHelper(component, "renderSchedAppBool");
    },
    
    catalogClick : function(component, event, helper) {
        helper.cmpNavHelper(component, "renderCatalogBool");
    },
    
    pbookClick : function(component, event, helper) {
        helper.cmpNavHelper(component, "renderPriceBool");
    },
    
    careerAppClick : function(component, event, helper) {
        helper.cmpNavHelper(component, "renderCareerBool");
    },
    
    getValueFromApplicationEvent : function(cmp, event) {
        var ShowResultValue = event.getParam("Pass_Result");
        var cmpString = event.getParam("Pass_String");
        // set the handler attributes based on event data
        console.log("showresult: " + ShowResultValue);
        console.log("cmpString: " + cmpString);
        
        //cmp.set("v.dealRenderBool", false);
        //cmp.set("v.testRenderBool", false);
        
        //cmp.set("v." + cmpString, ShowResultValue);
    },
    
    loginClick: function(component, event, helper){
        window.location.replace("https://auratesla-developer-edition.na162.force.com/s/login/");
    },
    
    logoutClick: function(component, event, helper){
        window.location.replace("https://auratesla-developer-edition.na162.force.com/servlet/networks/switch?startURL=%2Fsecur%2Flogout.jsp");
    }
});