public with sharing class PositionListApexController {

    
    @auraEnabled
    public static List<Position__c> getPositionList(Integer queryLimit, Integer offset){
        String[] fieldsToCheck = new String[]{
            'Name', 'Job_Description__c', 'Dealership__c', 'Id'};
                    Map<String, Schema.SObjectField> fieldDescribeTokens = 
                    Schema.SObjectType.Position__c.fields.getMap();
        for(String field : fieldsToCheck){
            if(!fieldDescribeTokens.get(field).getDescribe().isAccessible()){
                throw new System.NoAccessException();
            }
		}
        
        
        
        System.debug(queryLimit);
        System.debug(offset);
        List<Position__c> positionList = database.query('SELECT Id, Name, Job_Description__c, Dealership__c, Dealership__r.Name FROM Position__c WHERE Position__c.Status__c = \'Open\' LIMIT ' + queryLimit + ' OFFSET ' + offset);
        
        return positionList;
    }
}