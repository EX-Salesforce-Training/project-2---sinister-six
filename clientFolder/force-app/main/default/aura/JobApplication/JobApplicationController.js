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
        message: "Record ID: " + event.getParam("id")
      });
    } catch (e) {
      alert("Candidate successfully created!");
    }
    component.set("v.reloadCandForm", true);
  }
})