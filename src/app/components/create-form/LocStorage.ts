import {Storage} from './Storage';
import {Form} from './Form';

export class LocStorage implements Storage {
    formValue = new Form().getValue();
  
    saveDocument(getValueForm: any){
        const nummb = Date.now();
        window.localStorage.setItem(`${nummb}`, JSON.stringify(this.formValue));
  
        return `${nummb}`;
    }
  
    loadDocument(nummb: string) {
        return JSON.parse(localStorage.getItem(`${nummb}`));
    }
    
    getDocuments(): string[] {
        let key : string[];
        for(let i = 0; i < localStorage.length; i++) {
            key.push(localStorage.getItem(localStorage.key(i)))
        }
  
        return key;
    }
  }