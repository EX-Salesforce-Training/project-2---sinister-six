/*
 * Author: Jacob Schwartz
 * Date: 8/9/2021
 * Project2
 * Description: Class contains Aura methods for Aura components for Project2.
 * 
 * getDealTable() returns a list of dealerships with their top opportunities. 
 *   contains two queries, the first being the dealership query, then the second
 *   being the query for the top opportunity.
 * 
 * getOppTable() takes in a dealership ID and returns the list of opportunities 
 *   related to that ID. Opps cannot be closed won or lost.
 */
public class AuraDealershipApex {
    
    @AuraEnabled
    public static List<Map<String, String>> getDealTable(){
        List<Dealership__c> dList = [SELECT Name, City__c, State__c, Id FROM Dealership__c];
        List<Map<String, String>> returnList = new List<Map<String, String>>();
        
        for(Dealership__c d : dList){
            //Opportunity topOpp = [SELECT Name, Product_Total__c FROM Opportunity WHERE (Opportunity.Dealership__r.ID = :d.Id AND StageName != 'Closed Won' AND StageName != 'Closed Lost' )
              //        ORDER BY Product_Total__c DESC LIMIT 1][0];
            Map<String, String> m = new Map<String, String>();
            m.put('Name', d.Name);
            m.put('City__c', d.City__c);
            m.put('Id', d.Id);
            m.put('State__c', d.State__c);
            try{
                Opportunity topOpp = [SELECT Name, Product_Total__c FROM Opportunity WHERE (Opportunity.Dealership__r.ID = :d.Id AND StageName != 'Closed Won' AND StageName != 'Closed Lost' )
                     ORDER BY Product_Total__c DESC LIMIT 1][0];
                m.put('topOppName', topOpp.Name);
                m.put('productTotal', String.valueOf(topOpp.Product_Total__c));
            }catch(Exception e){
                System.debug(d.Name + 'Failure to get topOpps. Might be null!!!');
            }

            returnList.add(m);
        }
        
        return returnList;
    }
    
    @AuraEnabled
    public static List<Opportunity> getOppTable(Id dealId){
        System.debug('id: ' + dealId);
        List<Map<String, String>> returnList = new List<Map<String, String>>();
        List<Opportunity> oppList = [SELECT Name, Product_Total__c, CloseDate,StageName, Id, Dealership__r.Id  FROM Opportunity 
         WHERE (Dealership__r.Id = :dealId 
                AND StageName != 'Closed Won' AND StageName != 'Closed Lost')];
        System.debug('all opps: ' + oppList);
        return oppList;
    }
    
    @AuraEnabled
    public static List<Campaign> getCampTable(){
        return [SELECT Name, Status,NumberOfResponses,ExpectedRevenue, Id FROM campaign LIMIT 10];
    }
    
    @AuraEnabled
    public static void updateCamp(List<Campaign> cList){
        System.debug('cList: ' + cList);
        try{
        	update cList;
            System.debug('SUCCCESS!!! Clist update successful.');
        }catch(DMLException e){
            System.debug('ERROR!!! Updating cList in UpdateCampFunction');
        }
    }
    
    @AuraEnabled
    public static String getCampUrl(){
        
        String apex = String.valueOf(System.Url.getOrgDomainUrl());
        System.debug('apex: ' + apex);
        String str = apex.replace('.my.salesforce.com', '--c.visualforce.com/apex/campaignpage');
        System.debug('apexstr: ' + str);
        return str;
        //PageReference p = Page.CampaignPage;
        //return p;
    }

}