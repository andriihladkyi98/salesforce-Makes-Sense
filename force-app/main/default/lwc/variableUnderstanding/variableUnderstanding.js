import { LightningElement, api, track } from 'lwc';

export default class VariableUnderstanding extends LightningElement {
    // private variables
    @api memberName = 'Andrii';
    myListOfBooks = [];
    @track myPersonality = {
        name: 'Andrii',
        age: 27
    };

    //public variables
    @api myFavTeam = 'Kolkata Knight Riders';

    @api tryingTHIS = 'Tried Now';


}