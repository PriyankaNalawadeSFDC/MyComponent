import { LightningElement,wire, track  } from 'lwc';
import getAllAccountWithContactsList from '@salesforce/apex/AccountContactsController.getAllAccountWithContacts';
export default class AccountDetailWapper extends LightningElement {
    @track accountsWithContacts;
    @track error;
    @wire(getAllAccountWithContactsList)
    wiredAccountsWithContacts({ error, data }) {
        if (data) {
            this.accountsWithContacts = data;
            console.log(this.accountsWithContacts);
        } else if (error) {
            console.log(error);
            this.error = error;
        }
    }
}