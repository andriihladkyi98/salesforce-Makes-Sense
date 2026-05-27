/**
 * Provides Case and Task records for the independentWires component.
 */
public with sharing class IndependentWireController { //COMMENT
    
    /**
     * Returns recent Case records visible to the current user.
     */
    @AuraEnabled(cacheable = true)
    public static List<Case> getCases() { //COMMENT 1
        return [SELECT Id, Subject, Origin, Description 
        FROM Case 
        WITH USER_MODE
        LIMIT 5 ];
    }

    /**
     * Returns recent Task records visible to the current user.
     */
    @AuraEnabled(cacheable = true)
    public static List<Task> getTasks() { //COMMENT
        return [SELECT Id, ActivityDate, Subject, Description 
        FROM Task 
        WITH USER_MODE
        LIMIT 5];
    }

}
