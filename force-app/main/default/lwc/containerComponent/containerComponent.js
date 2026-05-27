import { LightningElement, api} from 'lwc';

export default class ContainerComponent extends LightningElement {
  @api productsFound = false;
  @api productList;
  @api parentCalled = false

  get hasProduct() {
    if (this.productsFound === "true") {
      return true;

    }else {
      return false;
    }
  }


  @api handleParentCall() {
    this.parentCalled = true;
  }

}