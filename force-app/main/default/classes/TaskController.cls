public with sharing class TaskController {

    @AuraEnabled(cacheable=true)
    public static List<Task> fetchTasksBySubject(String subjectString) {
        if (String.isBlank(subjectString)) {
            return new List<Task>();
        }

        String searchPattern = '%' + subjectString.trim() + '%';

        return [
            SELECT Id, Subject, Status, Description, ActivityDate, Priority
            FROM Task
            WHERE Subject LIKE :searchPattern
            WITH USER_MODE
        ];
    }
}
