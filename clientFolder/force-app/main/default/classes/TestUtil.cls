//////////////////////////////////////////////////
/*
 * Author: Jacob Schwartz
 * Date: 8/22/2021
 * Description: Helper function for tests.
 * Contains one function.
 * 
 * CreateTestUser():
 * public function accessible with other tests. Creates a test user with unique
 * username and email and returns it.
 */
//////////////////////////////////////////////////
//
@isTest
public class TestUtil {
    
    public static User CreateTestUser(){
        return CreateTestUser(0);
    }
    
    public static User CreateTestUser(integer profileInt){
        UserRole obj=new UserRole(Name= 'ABC'); 
		insert obj; 

		Profile pf= [Select Id from profile where Name='System Administrator'];
        
        if(profileInt == 1){
            pf = [Select Id from profile where Name='TeslaPortal Profile'];
        }

		String orgId=UserInfo.getOrganizationId(); 
		String dateString=String.valueof(Datetime.now()).replace(' ','').replace(':','').replace('-','');

		Integer RandomId=Integer.valueOf(Math.rint(Math.random()*1000000)); 
		String uniqueName=orgId+dateString+RandomId; 

		User uu=new User(firstname = 'ABC', 
		lastName = 'XYZ',
		email = uniqueName + '@test' + orgId + '.org', 
		Username = uniqueName + '@test' + orgId + '.org',
		EmailEncodingKey = 'ISO-8859-1', 
		Alias = uniqueName.substring(18, 23), 
		TimeZoneSidKey = 'America/Los_Angeles', 
		LocaleSidKey = 'en_US', 
		LanguageLocaleKey = 'en_US', 
		ProfileId = pf.Id, 
		UserRoleId = obj.Id);
        insert uu;
        return uu;
    }

}