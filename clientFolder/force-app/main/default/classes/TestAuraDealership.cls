@isTest
public class TestAuraDealership {

    @isTest static void TestAuraDealTable(){
        Dealership__c deal = new Dealership__c(Name = 'deal1', State__c='Nv');
        insert deal;
        
        Dealership__c dealList = [SELECT Name, Id FROM Dealership__c][0];
        
        Opportunity opp = new Opportunity(Name='opp1', StageName='Prospecting', 
                                         Dealership__c = dealList.Id, 
                                         CloseDate=Date.today());
        insert opp;
        
        Map<String, String> var = AuraDealershipApex.getDealTable()[0];
        
        System.assertEquals('deal1', var.get('Name'));
        System.assertEquals('opp1', var.get('topOppName'));
    }
    
    @isTest static void TestAuraDealTableNull(){
        Dealership__c deal = new Dealership__c(Name = 'deal1', State__c='Nv');
        insert deal;
        
        Dealership__c dealList = [SELECT Name, Id FROM Dealership__c][0];
        
        Opportunity opp = new Opportunity(Name='opp1', StageName='Prospecting', 
                                         Dealership__c = dealList.Id, 
                                         CloseDate=Date.today());
        //insert opp;
        
        Map<String, String> var = AuraDealershipApex.getDealTable()[0];
        
        System.assertEquals('deal1', var.get('Name'));
        //System.assertEquals('opp1', var.get('topOppName'));
    }
    
    @isTest static void TestAuraOppTable(){
        Dealership__c deal = new Dealership__c(Name = 'deal1', State__c='Nv');
        insert deal;
        
        Dealership__c dealList = [SELECT Name, Id FROM Dealership__c][0];
        
        Opportunity opp = new Opportunity(Name='opp1', StageName='Prospecting', 
                                         Dealership__c = dealList.Id, 
                                         CloseDate=Date.today());
        insert opp;
        
        List<Opportunity> var = AuraDealershipApex.getOppTable(dealList.Id);
        
        System.assertEquals(1, var.size());
        //System.assertEquals('opp1', var.get('topOppName'));
    }
    
    @isTest static void TestUrl(){
        String str = AuraDealershipApex.getCampUrl();
        System.assert(true);
        System.assertNotEquals(null, str);
    }
    
    @isTest static void TestCampaign(){
        Campaign c = new Campaign(Name='c1', Status='Pending');
        insert c;
        
        Campaign testC = AuraDealershipApex.getCampTable()[0];
        
        System.assertEquals('c1', testC.Name);
        
        testC.Name = 'test1';
        List<Campaign> cList = new List<Campaign>();
        cList.add(testC);
        
        AuraDealershipApex.updateCamp(cList);
        
        Campaign testD = AuraDealershipApex.getCampTable()[0];
        
        System.assertEquals('test1', testD.Name);
    }
}