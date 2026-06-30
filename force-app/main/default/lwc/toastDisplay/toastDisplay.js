import { LightningElement } from 'lwc';
import createAccountWithName from "@salesforce/apex/ToastController.createAccountWithName"
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ToastDisplay extends LightningElement {

    accountName;
    
    handleNameChange(event){
        this.accountName = event.detail.value;
    }
    
    
    handleAccountCreation() {
        // console.log(this.accountName);
        if(this.accountName){
            createAccountWithName({accountName: this.accountName})
            .then(() => {
                // console.log('Account created');
                this.showToast('Success', 'Your record is succesfuly created!', 'success', 'sticky');
            })
            .catch(error => {
                // console.log('Error' + error.body.message);
                this.showToast('Error!', 'Something went wrong, please contact System Admin! ' + error.body.message, 'error', 'sticky');
            })
        }
        else {
            this.showToast('Error!', 'Please enter Account name!', 'error', 'sticky');

        }
    }

    showToast(title, message, variant, mode) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(event);
    }

    // showErrorToast() {
    //     const event = new ShowToastEvent ({
    //         title: 'Error!',
    //         message: 'Something went wrong!',
    //         variant: 'error',
    //         mode: 'sticky'
    //     });
    //     this.dispatchEvent(event);
    // }

    

    
}