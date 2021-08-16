({
  shopRecordFormSuccess: function(component, event, helper) {
    component.set("v.reloadShopForm", false);

    try {
      component.find("notifLib").showToast({
        variant: "success",
        title: "Shop Appointmemt Created",
        message: "Record ID: " + event.getParam("id")
      });
    } catch (e) {
      alert("form successfully submitted");
    }
    component.set("v.reloadShopForm", true);
  },

  leadRecordFormSuccess: function(component, event, helper) {
    component.set("v.reloadSalesForm", false);
    try {
      component.find("notifLib").showToast({
        variant: "success",
        title: "Sales Appointmemt Created",
        message: "Record ID: " + event.getParam("id")
      });
    } catch (e) {
      alert("form successfully submitted");
    }
    component.set("v.reloadSalesForm", true);
  }
});