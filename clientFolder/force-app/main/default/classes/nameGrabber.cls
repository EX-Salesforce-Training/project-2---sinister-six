public class nameGrabber {
	
    @AuraEnabled
    public static String getName() {
        String myName = UserInfo.getFirstName();
        if (myName.length() > 0) {
            return myName;
        } else {
            return 'Guest User';
        }
    }
    
}