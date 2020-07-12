import {Field} from './Field';
import {FieldType} from './FieldType';
import {FieldLabel} from './FieldLabel';

export class SelectField implements Field {
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