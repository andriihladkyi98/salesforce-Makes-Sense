import { LightningElement } from 'lwc';
import fetchTasksBySubject from '@salesforce/apex/TaskController.fetchTasksBySubject';

export default class SearchTaskBySubjectImperative extends LightningElement {

    subject; 
    taskList = [];
    errorMessage;
    showTable = false

    handleSubjectChange(event) {
        // console.log('Change Happened ' + event.target.value);

        this.subject = event.target.value;

     
    } 

    searchTasks(){
        
        fetchTasksBySubject({subjectString: this.subject})
        .then(result => {
            // console.log('Result?' + JSON.stringify(result));
            
            this.taskList = result;
            this.showTable = true
        })
        .catch(error => {
            // console.log('Error?' + JSON.stringify(error));
            this.errorMessage = error.body.message;
        });

    }

}
