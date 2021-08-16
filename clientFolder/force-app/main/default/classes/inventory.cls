public with sharing class inventory {

    @AuraEnabled
    public static Integer getS() {
        String query = 'SELECT count() FROM Product2 WHERE model__c = \'Model S\' AND Customer_Vehicle__c = false';
        Integer count = Database.countQuery(query);
        return count;
    }
    
    @AuraEnabled
    public static Integer getX() {
        String query = 'SELECT count() FROM Product2 WHERE model__c = \'Model X\' AND Customer_Vehicle__c = false';
        Integer count = Database.countQuery(query);
        return count;
    }
    
    @AuraEnabled
    public static Integer getY() {
        String query = 'SELECT count() FROM Product2 WHERE model__c = \'Model Y\' AND Customer_Vehicle__c = false';
        Integer count = Database.countQuery(query);
        return count;
    }
    
    @AuraEnabled
    public static Integer get3() {
        String query = 'SELECT count() FROM Product2 WHERE model__c = \'Model 3\' AND Customer_Vehicle__c = false';
        Integer count = Database.countQuery(query);
        return count;
    }
    
    @AuraEnabled
    public static Integer getRoadsters() {
        String query = 'SELECT count() FROM Product2 WHERE model__c = \'Roadster\' AND Customer_Vehicle__c = false';
        Integer count = Database.countQuery(query);
        return count;
    }
    
    @AuraEnabled
    public static Integer getTrux() {
        String query = 'SELECT count() FROM Product2 WHERE model__c = \'Cybertruck\' AND Customer_Vehicle__c = false';
        Integer count = Database.countQuery(query);
        return count;
    }
    
    @AuraEnabled
    public static Integer getSemis() {
        String query = 'SELECT count() FROM Product2 WHERE model__c = \'Semi\' AND Customer_Vehicle__c = false';
        Integer count = Database.countQuery(query);
        return count;
    }
    
}