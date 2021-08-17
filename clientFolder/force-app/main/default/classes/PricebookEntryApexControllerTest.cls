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
               
        
        Pricebook2 pb = [
            SELECT Id
            FROM Pricebook2
            WHERE Name = 'Test Pricebook'
            LIMIT 1];
        
        Product2[] prod1 = [SELECT ID 
                  FROM Product2 
                  WHERE Product2.Name = 'Test Product 1'
                  LIMIT 1];
        
        Product2[] prod2 = [SELECT ID 
                  FROM Product2 
                  WHERE Product2.Name = 'Test Product 2'
                  LIMIT 1];
                
        
        Id pricebookId = Test.getStandardPricebookId();
        
        PricebookEntry standardpbEntry1 = new PricebookEntry(
            unitPrice=0, 
            useStandardPrice=false, 
            Product2Id=prod1[0].Id,
            Pricebook2Id=pricebookId );
        
        PricebookEntry standardpbEntry2 = new PricebookEntry(
            unitPrice=0, 
            useStandardPrice=false, 
            Product2Id=prod2[0].Id,
            Pricebook2Id=pricebookId );
        
        
        insert standardpbEntry1;
        insert standardpbEntry2;
        
        PricebookEntry testPBEntry1 = new PricebookEntry();        
        testPBEntry1.Pricebook2Id = pb.Id;
        testPBEntry1.Product2Id = prod1[0].Id;
        testPBEntry1.UseStandardPrice=false;
        testPBEntry1.UnitPrice = 100;
        
        PricebookEntry testPBEntry2 = new PricebookEntry();        
        testPBEntry2.Pricebook2Id = pb.Id;
        testPBEntry2.Product2Id = prod2[0].Id;
        testPBEntry2.UseStandardPrice=false;
        testPBEntry2.UnitPrice = 200;
        
        insert testPBEntry1;
        insert testPBEntry2;
    }
    
    @isTest
    public static void queryTest(){
        PricebookEntry[] testList1 = PricebookEntryApexController.getPriceBookEntryList(4, 0);
        PricebookEntry[] testList2 = [SELECT Product2Id, UnitPrice, PriceBook2Id, PriceBook2.Name, Product2.Name, Product2.RecordType.Name FROM PriceBookEntry WHERE Product2.RecordType.Name = 'Car' OR Product2.RecordType.Name = 'Car Service' OR Product2.RecordType.Name = 'Add-on' LIMIT 4 OFFSET 0];
        system.assertEquals(testList2, testList1);
    }
}