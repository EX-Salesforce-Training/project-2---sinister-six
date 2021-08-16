({
  myAction: function(component, event, helper) {},

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
    },
    
    campClick: function(component, event, helper){
        //helper.fireButtonEvent("testRenderBool");
        helper.cmpNavHelper(component, "renderTestBool");
    },
    
    schedAppClick: function(component, event,helper){
        helper.cmpNavHelper(component, "renderSchedAppBool");
    }
});