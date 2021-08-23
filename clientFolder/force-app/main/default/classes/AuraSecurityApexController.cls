//////////////////////////////////////////////////
/*
 * Author: Jacob Schwartz
 * Date: 8/22/2021
 * Description: checks which profile is currently accessing experience site. 
 * 
 * checkGuestUser() returns a string based on who is currently logged into 
 * the experience site. Function is called by the AuraSecurity cmp helper file. 
 */
//////////////////////////////////////////////////
//

public class AuraSecurityApexController {
    
    @AuraEnabled
    public static String checkGuestUser(){
        Profile p = [select id,Name from Profile where id=:Userinfo.getProfileid()];
        System.debug('profiel: ' + p);
        if(p.Name == 'TeslaPortal Profile')
            return 'guest';
        else if(p.Name == 'CPartner Community User')
            return 'customer';
        return 'employee';
    }

}