@isTest
public class PositionListControllerTest {
    @testSetup
    public static void setup(){
        Dealership__c testDealer = new Dealership__c();
        testDealer.Name = 'test dealership';
        testDealer.State__c = 'st';
        
        insert testDealer;
        
        Dealership__c dl = [SELECT ID FROM Dealership__c LIMIT 1];
        
        Position__c testP = new Position__c();
        testP.Name = 'test Position';
        testP.Job_Description__c = 'test description';
        testP.Dealership__c = dl.Id;
        
        insert testP;
    }
    
    @isTest
    public static void queryTest(){
        Position__c[] list1 = [SELECT Id, Name, Job_Description__c, Dealership__c, Dealership__r.Name 
                               FROM Position__c 
                               WHERE Position__c.Status__c = 'Open' 
                               LIMIT 1 
                               OFFSET 0];
        
        Position__c[] list2 = PositionListApexController.getPositionList(1, 0);
        system.assertEquals(list1, list2);
    }
}