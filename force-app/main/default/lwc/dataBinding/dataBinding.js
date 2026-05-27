import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    userName = 'Andrii';
    currentTime = new Date().toLocaleTimeString();
    subscriberScore = 9;
    totalLessonsWatched = 50;
    memberStatus;


    updateMembersStatus(event){
        console.log('Event target received: ' + typeof (event.target));
        console.log('Event target received: ' + event.target);
        console.log('Event target received: ' + event.target.value);
        console.log('Event detail received: ' + event.detail);
        console.log('Event detail received: ' + JSON.stringify(event.detail));
        this.memberStatus = event.target.value;
    }


    // get handleMinutesWatched(){
    //     return `The total watch duration is: ${this.totalLessonsWatched * 10}`;
    // }

    _minutesWatched = (this.totalLessonsWatched * 10);

    get minutesWatched() {
        return this._minutesWatched;
    }

    set minutesWatched(value){ 
        //this._minutesWatched = value;
        //this._minutesWatched = value < 1000 ? value : 5000;
        if(value < 10000){
            this._minutesWatched = value;
        }else {
            this._minutesWatched = 5000;
        }
    }

    handleWatchChange(event){
        this.minutesWatched = event.target.value;
    }


}
