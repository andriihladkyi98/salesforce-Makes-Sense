import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'

export default class DependentWires extends LightningElement {

    @api recordId;
    accountName;
    taskList;
    taskFound = false;
    fields = [ACCOUNT_NAME];


    @wire(getRecord, {recordId: '$recordId', fields: '$fields'})
    wiredAccount({data, error}){
        if(data) {
            // console.log('HM: ' + JSON.stringify(data))
            this.accountName = data.fields.Name.value;
        }
        else if(error){

        } 

    }

}