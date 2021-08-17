@isTest
public class PricebookEntryApexControllerTest {

    @testSetup
    public static void setup(){
        Pricebook2 testPB = new Pricebook2();
        testPB.Name = 'Test Pricebook';
        
        insert testPB;
        
        Product2 testProd1 = new Product2();
        testProd1.RecordTypeID = Schema.SObjectType.Product2.getRecordTypeInfosByName().get('Car').getRecordTypeId();
        testProd1.Name = 'Test Product 1';
        system.debug(testProd1.RecordTypeId);
        
        Product2 testProd2 = new Product2();
        testProd2.RecordTypeID = Schema.SObjectType.Product2.getRecordTypeInfosByName().get('Car').getRecordTypeId();
        testProd2.Name = 'Test Product 2';
        system.debug(testProd2.RecordTypeId);
        
        insert testProd1;        
        insert testProd2;
        
        PricebookEntry testPBEntry1 = new PricebookEntry();
        Product2[] prod1 = [SELECT ID 
                  FROM Product2 
                  WHERE Product2.Name = 'Test Product 1'
                  LIMIT 1];
        Pricebook2[] pb = [SELECT ID 
                  FROM Pricebook2 
                  WHERE Pricebook2.Name = 'Test Pricebook'
                  LIMIT 1];
        testPBEntry1.Pricebook2 = pb[0];
        testPBEntry1.Product2Id = prod1[0].Id;
        testPBEntry1.UnitPrice = 100;
        
        PricebookEntry testPBEntry2 = new PricebookEntry();
        Product2[] prod2 = [SELECT ID 
                  FROM Product2 
                  WHERE Product2.Name = 'Test Product 2'
                  LIMIT 1];
        testPBEntry2.Pricebook2 = pb[0];
        testPBEntry2.Product2Id = prod2[0].Id;
        testPBEntry2.UnitPrice = 200;
        
        insert testPBEntry1;
        insert testPBEntry2;
    }
    
    /*@isTest
    public static void queryTest(){
        system.assertEquals(expected, actual);
    }*/
}