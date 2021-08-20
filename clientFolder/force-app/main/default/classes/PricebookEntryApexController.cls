public with sharing class PricebookEntryApexController {
    
    @auraEnabled
    public static List<PriceBookEntry> getPriceBookEntryList(Integer queryLimit, Integer offset, String sortOrder, String sortDirection){
        String[] fieldsToCheck = new String[]{
            'Product2Id', 'UnitPrice', 'PriceBook2Id'};
                    Map<String, Schema.SObjectField> fieldDescribeTokens = 
                    Schema.SObjectType.PriceBookEntry.fields.getMap();
        for(String field : fieldsToCheck){
            if(!fieldDescribeTokens.get(field).getDescribe().isAccessible()){
                throw new System.NoAccessException();
            }
		}
        String sortValue;
        switch on sortOrder {
            when 'ProductUrl' {	
                sortValue = 'Product2.Name';
            }	
            when 'UnitPrice' {
                sortValue = 'UnitPrice';
            }
            when 'ProductType' {
                sortValue = 'Product2.RecordType.Name';
            }
            when 'PricebookUrl' {
                sortValue = 'PriceBook2.Name';
            }
        }
        System.debug(queryLimit);
        System.debug(offset);
        List<PriceBookEntry> priceBookEntryList = database.query('SELECT Product2Id, UnitPrice, PriceBook2Id, PriceBook2.Name, Product2.Name, Product2.RecordType.Name FROM PriceBookEntry WHERE Product2.RecordType.Name = \'Car\' OR Product2.RecordType.Name = \'Car Service\' OR Product2.RecordType.Name = \'Add-on\' ORDER BY ' + sortValue +  ' ' + sortDirection + ' LIMIT ' + queryLimit + ' OFFSET ' + offset);
        
        return priceBookEntryList;
    }
}