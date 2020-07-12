import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { removeSummaryDuplicates } from '@angular/compiler';
import { formatCurrency } from '@angular/common';
import {FieldType} from './FieldType';
import {Field} from './Field';
import {Storage} from './Storage';
import {FieldLabel} from './FieldLabel';
import {InputField} from './InputField';
import {TextAreaField} from './TextAreaField';
import {DateField} from './DataField';
import {EmailField} from './EmailField';
import {SelectField} from './SelectField';
import {CheckboxField} from './CheckboxField';
import {Form} from './Form';
import {App} from './App';
import {LocStorage} from './LocStorage';


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











