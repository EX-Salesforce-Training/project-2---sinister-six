({
	myAction : function(component, event, helper) {
		
	},
    
    changeHeight: function(component, event, helper) {
    component.set("v.divHeight", window.innerHeight);
  },
    
    setCampTable: function(component, event, helper) {
    //console.log("Made it htis far");
    component.set("v.campCol", [
      { label: "Name", fieldName: "Name", type: "text", editable: true },
      { label: "Status", fieldName: "Status", type: "list", editable: true },
      { label: "Number Of Responses", fieldName: "NumberOfResponses", type: "text", editable: true },
      { label: "Expected Revenue", fieldName: "ExpectedRevenue", type: "text", editable: true }

    ]);
    helper.getCampCallout(component);
  },
    
    handleSaveEdition: function (cmp, event, helper) {
        var draftValues = event.getParam('draftValues');
        helper.saveEdition(cmp, draftValues);
    },
    
    createCampaignRecordFormSuccess: function(component, event, helper) {
    component.set("v.reloadCreateCampForm", false);
    try {
      component.find("notifLib").showToast({
        variant: "success",
        title: "Sales Appointmemt Created",
        message: "Record ID: " + event.getParam("id")
      });
    } catch (e) {
      alert("form successfully submitted");
    }
    component.set("v.reloadCreateCampForm", true);
  }
})