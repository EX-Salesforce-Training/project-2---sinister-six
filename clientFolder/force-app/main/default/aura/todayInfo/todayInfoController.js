({
	init : function(component, event, helper) {
		let today = $A.localizationService.formatDate(new Date(), "YYYY-MM-DD");
        component.set("v.today", today);
        let rightNow = new Date().toLocaleTimeString();
        component.set("v.rightNow", rightNow);
	}
})