import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CASE_OBJECT from '@salesforce/schema/Case';

export default class CaseFormWithEvents extends LightningElement {
    isAppBuilder = false;
    caseObject = CASE_OBJECT;

    connectedCallback() {
        this.isAppBuilder = window.location.href.includes('/flexipageEditor/');
    }

    handleSubmit(event) {
        console.log('Form is submitted for Case Creation' + JSON.stringify(event.detail));
    }

    handleSuccess(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Case created',
                message: `Case record ${event.detail.id} was created successfully.`,
                variant: 'success'
            })
        );
    }
}
