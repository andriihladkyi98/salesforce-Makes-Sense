import { LightningElement } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';

export default class CreateRecordWithCustomLayout extends LightningElement {
    isAppBuilder = false;
    caseObject = CASE_OBJECT;

    connectedCallback() {
        this.isAppBuilder = window.location.href.includes('/flexipageEditor/');
    }
}
