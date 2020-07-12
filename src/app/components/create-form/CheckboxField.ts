import {FieldLabel} from './FieldLabel';
import {FieldType} from './FieldType';
import {Field} from './Field';


export class CheckboxField implements Field {
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