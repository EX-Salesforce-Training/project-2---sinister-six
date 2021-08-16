@isTest
public class inventoryTest {
	
    @isTest
    static void invenTest() {
        Product2 models = new Product2();
        models.Name = 'MydelS';
        models.Model__c = 'Model S';
        insert modelS;
        system.assert(inventory.getS() == 1);
        
        Product2 modelx = new Product2();
        modelx.Name = 'MydelX';
        modelx.Model__c = 'Model X';
        insert modelx;
        system.assert(inventory.getX() == 1);
        
        Product2 modely = new Product2();
        modely.Name = 'MydelY';
        modely.Model__c = 'Model Y';
        insert modely;
        system.assert(inventory.getY() == 1);
        
        Product2 model3 = new Product2();
        model3.Name = 'Mydel3';
        model3.Model__c = 'Model 3';
        insert model3;
        system.assert(inventory.get3() == 1);
        
        Product2 roadie = new Product2();
        roadie.Name = 'Rhodes';
        roadie.Model__c = 'Roadster';
        insert roadie;
        system.assert(inventory.getRoadsters() == 1);
        
        Product2 cybertruck = new Product2();
        cybertruck.Name = 'Mybertruck';
        cybertruck.Model__c = 'CyberTruck';
        insert cybertruck;
        system.assert(inventory.getTrux() == 1);
    }
    
}