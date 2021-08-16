({
	fireButtonEvent: function() {
    var evt = $A.get("e.c:changeTab");
        evt.setParams({ "Pass_Result": true});
        evt.fire();
	}
})