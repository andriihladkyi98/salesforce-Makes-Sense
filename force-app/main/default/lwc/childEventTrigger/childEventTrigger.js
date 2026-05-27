import { LightningElement } from 'lwc';

export default class ChildEventTrigger extends LightningElement {

  selectedProduct = {};


  handleFiringEvent(){
    this.selectedProduct = {id: 1, name: 'Geely Coolray'};
    
    const event = new CustomEvent('sendroductselected',{
      detail: {
        selectedProduct: this.selectedProduct,
        timestamp: new Date().toISOString(),
        selectedBy: 'Andrii Hladkyi'
      
      }

    }); 


    this.dispatchEvent(event);
      
    
  }
}