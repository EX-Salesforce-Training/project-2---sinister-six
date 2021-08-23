//////////////////////////////////////////////////
/*
 * Author: Jacob Schwartz
 * Date: 8/22/2021
 * Description: Test Class for AuraSecurityApexController.
 * 
 * testEmployee() tests whether the user logged in is an employee
 * 
 */
//////////////////////////////////////////////////
//
@isTest
public class TestAuraSecurityApexController {
	
    @isTest static void testEmployee(){
        
        User uu = TestUtil.CreateTestUser();
        
        System.runAs(uu){
            String str = AuraSecurityApexController.checkGuestUser();
            //Profile uProfile = uu.ProfileId;
            //System.debug('uProfie: ' + uProfile);
            System.assertEquals('employee', str);
        }
        
    }
}