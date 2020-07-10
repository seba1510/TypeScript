import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { removeSummaryDuplicates } from '@angular/compiler';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  newForm(){
   const app = new App;
  }

  showForm(){
  const dd = new LocStorage;
  dd.saveDocument(dd.formValue);
  }

  removedoc(key: any){
  console.log(localStorage.removeItem(key));
  }

  saveForm(){
    const div = document.getElementById("answer");
    const bt = document.getElementById("show");
   

    for (let i = 0; i<localStorage.length; i++){
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      div.innerHTML += `<table><th>${key}</th> <th>${value}</th><th><button type="button" onclick="removedoc(${key})">Usuń Wpis</button></th></table>`;
    }

  }
  deleteAll(){
    console.log(localStorage.clear());
    const div = document.getElementById("answer");
    div.innerHTML = null;
  }
}

enum FieldType{
  TextField,
  MultiLineTextField,
  Date,
  Email,
  SelectField,
  Chceckbox,
}
interface Field{
  name: string;
  label: string;
  type: FieldType;
  value: any;
  render(parentElement: HTMLElement): HTMLElement;
  getValue(element: HTMLElement): any;
}
interface Storage {

  saveDocument(getValueForm: any): string; 
  loadDocument(idDoc: string): any; 
  getDocuments(): string[]; 
}
class FieldLabel {
  render(label: string): HTMLElement {
      const strong = document.createElement('strong');
      strong.innerHTML = label;
      return strong;
  } 
}
class InputField implements Field {
  name: string;
  label: string;
  type = FieldType.TextField;
  value: any;

  render(parentElement: HTMLElement) {
      const label = new FieldLabel().render(this.label);
      const input = document.createElement('input');
      parentElement.appendChild(label);
      parentElement.appendChild(input);

      return parentElement;
  }

  getValue(element: HTMLElement) {
      return element.nodeValue;
  }
  
}
class TexAreaField implements Field {
  name: string;
  label: string;
  type: FieldType.MultiLineTextField;
  value: any;

  render(parentElement: HTMLElement) {
      const textAreaLabel = new FieldLabel().render(this.label);
      const textAreaInput = document.createElement('textarea');

      parentElement.appendChild(textAreaLabel);
      parentElement.appendChild(textAreaInput);

      return parentElement;
  }

  getValue(element: HTMLElement) {
      return this.value;
  }

}
class DateField implements Field {
  public name: string;
  public label: string;
  public type: FieldType.Date;
  public value: any;

  render(parentElement: HTMLElement) {
      const dateField = new FieldLabel().render(this.label);
      parentElement.appendChild(dateField);

      return parentElement;
  }

  getDate = (): string => `${new Date().toLocaleString()}`

  getValue(element: HTMLElement) {
      return element.nodeValue;
  }

}
class EmailField  implements Field{
  name: string;
  label: string;
  type: FieldType.Email;
  value: any;

  render(parentElement: HTMLElement) {
      const emailLabel = new FieldLabel().render(this.label);
      const emailInput = document.createElement('input');
      emailInput.type = "Email";

      parentElement.appendChild(emailLabel);
      parentElement.appendChild(emailInput);

      return parentElement;
  }

  getValue(element: HTMLElement) {
      return element.nodeValue;
  }
}
class SelectField implements Field {
  name: string;
  label: string;
  type: FieldType.SelectField;
  value: any;

  render(parentElement: HTMLElement) {
      const selectLabel = new FieldLabel().render(this.label);
      const select = document.createElement('select') as HTMLSelectElement;

      parentElement.appendChild(selectLabel);
      parentElement.appendChild(select);

      const tmp = document.querySelector('select') as HTMLSelectElement;

      for(let i = 0; i < 3; i++) {
          const options = document.createElement('option') as HTMLOptionElement;
          tmp.appendChild(options);
      }

      select.children[0].innerHTML = "Ekonomia";
      select.children[1].innerHTML = "Informatyka";
      select.children[2].innerHTML = "Informatyka i Ekonometria";

      return parentElement;
  }

  getValue(element: HTMLElement) {
      return element.nodeValue;
  }

}
class CheckboxField implements Field {
  name: string;
  label: string;
  type: FieldType.Chceckbox;
  value: any;
  

  render(parentElement: HTMLElement) {
      const checkboxLabel = new FieldLabel().render(this.label);
      const checkboxYes = document.createElement('input');
      checkboxYes.setAttribute('type', 'checkbox');
      const checkboxNo = document.createElement('input');
      checkboxNo.setAttribute('type', 'checkbox');

      parentElement.appendChild(checkboxLabel);
      parentElement.appendChild(checkboxYes);
      parentElement.appendChild(checkboxNo);

      return parentElement;
  }

  getValue(element: HTMLElement) {
      return element.nodeValue;
  }
}
class Form{
  form: HTMLFormElement;
  name = new InputField();
  surname = new InputField();
  email = new EmailField();
  select = new SelectField();
  checkbox = new CheckboxField();
  textArea = new TexAreaField();
  date = new DateField();
  // button = new ButtonInput();

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
        // this.checkbox.render(this.form), 
        this.textArea.render(this.form), 
        // this.button.render(this.form), savebutton, exitbutton
      ];


      // for(let i = 0; i < elementArray.length; i++){
      
      //     this.form.appendChild(elementArray[i]);
      // }
      }

  getValue() {

    const formValue = [this.name.value = 'Adam', 
        this.surname.value = 'Nowak', 
        this.email.value = 'adam@nowak.pl',
        this.select.value = 'Ekonomia', 
        // this.checkbox.value, 
        this.textArea.value= 'Brak'];
      return formValue;
  }
  
  }
class App{

  activeForm = new Form();

  constructor () {
       
          this.activeForm.render();
      
    }
  }
//   class ButtonInput {
//     render(parentElement: HTMLElement) {
//         const button = document.createElement('button');
//         button.setAttribute('id','btn');
//         button.setAttribute('type','submit');
//         button.innerHTML = "Wyślij";
//         parentElement.appendChild(button);

//         const buttton = document.createElement('button');
//         buttton.setAttribute('id','btnn');
//         buttton.setAttribute('type','exit');
//         buttton.innerHTML = "Cofnij";
//         parentElement.appendChild(buttton);

//         return parentElement;
//     }

// }
class LocStorage implements Storage {
  formValue = new Form().getValue();

  saveDocument(getValueForm: any){
      const idDoc = Date.now();
      localStorage.setItem(`${idDoc}`, JSON.stringify(this.formValue));

      return `${idDoc}`;
  }

  loadDocument(idDoc: string) {
      return JSON.parse(localStorage.getItem(`${idDoc}`));
  }
  
  getDocuments(): string[] {
      let keyArray : string[];
      for(let i = 0; i < localStorage.length; i++) {
          keyArray.push(localStorage.getItem(localStorage.key(i)))
      }

      return keyArray;
  }
}

class ReadStorage{
  
}

