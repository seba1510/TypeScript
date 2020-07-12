import {Form} from './Form';
export class App{

    activeForm = new Form();
  
    constructor () {
         
            this.activeForm.render();
        
      }
    }