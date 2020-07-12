import {Field} from './Field';
import {FieldType} from './FieldType';
import {FieldLabel} from './FieldLabel';
import {InputField} from './InputField';
import {TextAreaField} from './TextAreaField';
import {DateField} from './DataField';
import {EmailField} from './EmailField';
import {SelectField} from './SelectField';
import {CheckboxField} from './CheckboxField';
import {ButtonInput} from './ButtonInput';

export class Form{
    form: HTMLFormElement;
    name = new InputField();
    surname = new InputField();
    email = new EmailField();
    select = new SelectField();
    checkbox = new CheckboxField();
    textArea = new TextAreaField();
    date = new DateField();
    button = new ButtonInput();
  
    constructor () {
        this.form = document.getElementById('form') as HTMLFormElement;
        this.date.label = "Dzisiejsza data: " + this.date.getDate();
        this.name.label = "Imie: ";
        this.surname.label = "Nazwisko: ";
        this.email.label = "Email: ";
        this.select.label = "Wybierz swój kierunek studiów: ";
        this.checkbox.label = "Preferujesz e-learning?";
        this.textArea.label = "Uwagi";
    }
  
    render(){
        const savebutton = document.createElement('button');
        savebutton.setAttribute('id','button-save');
        savebutton.setAttribute('type','submit');
        savebutton.innerHTML = "Zapisz";
  
        const exitbutton = document.createElement('button');
        exitbutton.setAttribute('id','button-exit');
        exitbutton.setAttribute('type','exit');
        exitbutton.innerHTML = "Wstecz";
  
        
  
        const elementArray: HTMLElement[] = [this.date.render(this.form), 
          this.name.render(this.form), 
          this.surname.render(this.form), 
          this.email.render(this.form), 
          this.select.render(this.form), 
          this.checkbox.render(this.form), 
          this.textArea.render(this.form), 
          this.button.render(this.form), savebutton, exitbutton
        ];
  



        }
  
    getValue() {
  
      const formValue = [this.name.getValue, 
          this.surname.getValue, 
          this.email.getValue,
          this.select.getValue, 
          this.checkbox.getValue, 
          this.textArea.getValue];
        return formValue;
    }
    
    }