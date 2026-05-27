import { LightningElement, track } from 'lwc';

export default class ReactivityCheck extends LightningElement {
  userAddress = 'Via Tiepolo 56, Voghera';

  @track myPersonalDetails =[
    {
      "message": "Hello, Darryl! Your order number is: #45",
      "phoneNumber": "1-615-710-8399 x7332",
      "phoneVariation": "+90 368 500 10 19",
      "status": "active",
      "name": {
        "first": "Craig",
        "middle": "Hayden",
        "last": "Osinski"
      },
      "username": "Craig-Osinski",
      "password": "UWyNqE1AQLsNRww",
      "emails": [
        "Hattie.Terry@example.com",
        "Mireille13@gmail.com"
      ],
      "location": {
        "street": "861 Terry Fields",
        "city": "Abbottchester",
        "state": "Maine",
        "country": "Kazakhstan",
        "zip": "05963",
        "coordinates": {
          "latitude": "4.5639",
          "longitude": "31.372"
        }
      },
      "website": "https://frugal-cohort.net/",
      "domain": "sure-footed-pottery.name",
      "job": {
        "title": "Internal Brand Producer",
        "descriptor": "Internal",
        "area": "Response",
        "type": "Analyst",
        "company": "West, Homenick and Schamberger"
      },
      "creditCard": {
        "number": "4351-4348-5119-1161",
        "cvv": "305",
        "issuer": "discover"
      },
      "uuid": "18d2f99d-3418-488d-bd15-dfb6e170259a",
      "objectId": "698df1285cd0222e3c824364"
    },
  ]

  
  
  updateAddress() {
    this.userAddress = 'Via Sadova 51B Sokyriani';
    this.myPersonalDetails[0].objectId = "18d2f99d-3418-488d-bd15-dfb6e170259a" 
  }



}