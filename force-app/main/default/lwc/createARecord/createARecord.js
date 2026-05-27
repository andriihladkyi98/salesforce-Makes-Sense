import { LightningElement } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import TYPE_FIELD from '@salesforce/schema/Case.Type';
import REASON_FIELD from '@salesforce/schema/Case.Reason';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import SLA_VIOLATION_FIELD from '@salesforce/schema/Case.SLAViolation__c';

export default class CreateARecord extends LightningElement {
    isAppBuilder = false;
    caseObject = CASE_OBJECT;
    fields = [
        SUBJECT_FIELD,
        TYPE_FIELD,
        REASON_FIELD,
        ORIGIN_FIELD,
        PRIORITY_FIELD,
        SLA_VIOLATION_FIELD
    ];

    connectedCallback() {
        this.isAppBuilder = window.location.href.includes('/flexipageEditor/');
    }
}
