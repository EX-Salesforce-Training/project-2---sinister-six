public class nameGrabber {
	
    @AuraEnabled
    public static String getName() {
        String myName = UserInfo.getFirstName();
        if (myName.length() > 0) {
            return myName;
        } else if(myName == 'TeslaPortal') {
            return 'Guest User';
        } else {
            return 'Guest User';
        }
    }
    
}