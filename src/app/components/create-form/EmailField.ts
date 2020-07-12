import {Field} from './Field';
import {FieldType} from './FieldType';
import {FieldLabel} from './FieldLabel';

export class EmailField  implements Field{
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