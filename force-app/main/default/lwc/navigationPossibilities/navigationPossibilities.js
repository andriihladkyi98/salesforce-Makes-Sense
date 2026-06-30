import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationPossibilities extends NavigationMixin(LightningElement) {

    navigateToRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '001d200001PoLokAAF',
                objectApiName: 'Account',
                actionName: 'view'
            }
        })
    }

    navigateToWeb(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.linkedin.com/in/andrii-hladkyi-7045b7137/'
            }
        })
    }

    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: ''
            }
        })
    }

    navigateToView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            }
        })
    }

}
