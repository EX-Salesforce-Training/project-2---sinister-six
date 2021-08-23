({
  myAction: function(component, event, helper) {},

  changeHeight: function(component, event, helper) {
    component.set("v.divHeight", window.innerHeight);
    helper.setAccessByProfile(component);
      
  },

  setDealTable: function(component, event, helper) {
    console.log("Made it htis far");
    component.set("v.dealCol", [
      { label: "Dealership Name", fieldName: "Name", type: "text" },
      { label: "Dealership City", fieldName: "City__c", type: "text" },
      { label: "Dealership State", fieldName: "State__c", type: "text" },
      { label: "Top Opportunity Name", fieldName: "topOppName", type: "text" },
      {
        label: "Top Opportunity Product Total",
        fieldName: "productTotal",
        type: "text"
      }
    ]);
    helper.getDealCallout(component);
  },

  tableDealClick: function(component, event, helper) {
    var msg = event.currentTarget.dataset.myvalue;
    var dealName = event.currentTarget.dataset.myvalue2;
    console.log("clicking functin: " + dealName);
    //alert(msg);
    component.set("v.oppDealerName", dealName);
    helper.getOppCallout(component, msg);
  },

  oppLink: function(component, event, helper) {
    //var id = event.currentTarget.dataset.myvalue;
    //console.log("opplink: " + id);
   // var urlEvent = $A.get("e.force:navigateToURL");
    //urlEvent.setParams({
     // url: "/" + "0035e00000DucgdAAB"
    //});
    //urlEvent.fire();
  },
    
    navLinkFunction : function(component, event, helper) {
        console.log("navlink function");
        var pageRef = {
            type: 'standard__objectPage',
            attributes: {
                actionName: 'list',
                objectApiName: 'Account',

            },
            state: {
                filterName: "MyAccounts"
            }
        };
        var navLink = component.find("navLink");
        navLink.generateUrl(pageRef).then($A.getCallback(function(a) {
                component.set("v.url", a ? a : "#");
            }), $A.getCallback(function(error) {
                component.set("v.url", "#");
            }));
        var pageRef2 = {
            type: 'standard__recordPage',
            attributes: {
                actionName: 'view',
                objectApiName: 'Contact',
                recordId : '0035e00000DucgdAAB' // change record id. 
            },
        };
        navLink.navigate(pageRef2, true);
    }
});