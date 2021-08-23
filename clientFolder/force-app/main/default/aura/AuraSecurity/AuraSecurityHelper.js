({
	helperMethod : function() {
		
	}, 
    
    testMethod: function(cmp){
        console.log("coming from secd");
    },
    //setAccessByProfile
    setAccessByProfile: function(cmp){
        let action = cmp.get('c.checkGuestUser');
        console.log("hello acces owrld");
        console.log(cmp.get('v.test'));
        action.setCallback(this, function(response){
           let state = response.getState();
            if(state === "SUCCESS"){
                console.log("success");
                console.log(response.getReturnValue());
                //cmp.set('v.profileString', response.getReturnValue());
                this.setComponentBasedOnProfile(cmp, response.getReturnValue());
            }else{
                console.log("ERROR! In checkIfPublicAccess");
            }
        });
        $A.enqueueAction(action);
    },
    //setComponentBasedOnProfile(cmp, str)
    setComponentBasedOnProfile: function(cmp, str){
        //let str = cmp.get('v.profileString');
        //console.log("setaccesss: " + str);
        switch(str){
            case "guest":
                //THIS CODE BLOCK>>>>
                //PLACE COMPONENT HERE
                //IF YOU WANT IT TO RENDER FOR A GUEST USER
                //WHO IS NOT LOGGED IN.
                //>>>>>>>>
                break;
                
            case "customer":
                //CODE BLOCK>>>>
                //PLACE COMPONENT HERE
                //THAT YOU WANT TO RENDER FOR CUSTOMERS
                //WHO ARE LOGGED IN
                //>>>>>>>>
                
                //AuraHeader
                cmp.set("v.renderLoginButton", false);
                
                break;
                
            case "employee":
                //CODE BLOCK>>>>
                //PLACE COMPONENT HERE
                //THAT YOU WANT TO RENDER FOR EMPLOYEES
                //WHO ARE LOGGED IN
                //>>>>>>>>
                
                //Aura Header Buttons
                cmp.set("v.renderCampButton", true);
                cmp.set("v.renderLoginButton", false);
                
                //Dealership page
                cmp.set("v.oppBool", true);
                
                break;
                
            default:
                //code block>>>>>>
                //DO NOT USE>>>>>>
                
        }
    }
})