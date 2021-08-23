public class appointmentGrabber {
	
    @AuraEnabled
    public static List<Lead> fetchSales() {
        return [SELECT FORMAT(appointment_date_time__c), ownerId, phone, email FROM lead WHERE ownerId =: UserInfo.getUserId() AND appointment_date_time__c != null AND appointment_date_time__c > TODAY];
    }
     
    @AuraEnabled
    public static List<Shop_Case__c> fetchShop() {
        return [SELECT name, FORMAT(appointment_date_time__c), vehicle_model__c, service_type__c FROM shop_case__c WHERE ownerId =: UserInfo.getUserId() AND appointment_date_time__c > TODAY];
    }
    
}