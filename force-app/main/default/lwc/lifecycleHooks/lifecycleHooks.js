import { LightningElement } from 'lwc';


export default class LifecycleHooks extends LightningElement {
  userName = 'Andrii';

  handleNameChange() {
    this.userName = 'Hladkyi';
  }


  constructor() {
    super()
    // console.log('Constructor is called!');
  }

  connectedCallback() {
    // console.log('Connected Callback is fired!');
  }

  renderedCallback() {
    // console.log('Rendered Callback is fired!');
  }

  disconnectedCallback(){
    // console.log('Component is done with what it was supposed to do');
  }

  errorCallback(stack, trace){
    // console.log(stack + '----' + trace);
  }


}